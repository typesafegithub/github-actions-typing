#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:2.2.0")

@file:Repository("https://bindings.krzeminski.it")
@file:DependsOn("actions:checkout:v4")
@file:DependsOn("actions:setup-java:v4")
@file:DependsOn("gradle:gradle-build-action:v3")
@file:DependsOn("typesafegithub:github-actions-typing:v1")

import io.github.typesafegithub.workflows.actions.actions.Checkout
import io.github.typesafegithub.workflows.actions.actions.SetupJava
import io.github.typesafegithub.workflows.actions.gradle.GradleBuildAction
import io.github.typesafegithub.workflows.actions.typesafegithub.GithubActionsTyping
import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.PullRequest
import io.github.typesafegithub.workflows.domain.triggers.Push
import io.github.typesafegithub.workflows.dsl.workflow

workflow(
    name = "Build",
    on = listOf(
        Push(branches = listOf("main")),
        PullRequest(),
    ),
    sourceFile = __FILE__,
) {
    job(
        id = "build",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = Checkout())
        uses(action = GradleBuildAction(arguments = "build"))

        run(
            name = "Check if the produced files are committed correctly",
            command = """
                set -euxo pipefail

                unzip_jar() {
                    for jar in dist/github-actions-typing/lib/*.jar; do
                        echo "Extracting ${'$'}jar..."
                        filename=${'$'}(basename -- "${'$'}jar")
                        filename="${'$'}{filename%.*}"

                        targetDir="${'$'}1/${'$'}filename"
                        echo "Target directory: ${'$'}targetDir"

                        mkdir -p "${'$'}targetDir"
                        unzip -qq "${'$'}jar" -d "${'$'}targetDir"
                    done
                }

                unzip_jar "dist-unzipped-before"

                rm -rf dist
                unzip -qq build/distributions/github-actions-typing.zip -d dist

                unzip_jar "dist-unzipped-after"

                git diff --no-index --exit-code dist-unzipped-before dist-unzipped-after
            """.trimIndent()
        )
    }

    job(
        id = "validate-types",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = Checkout())
        uses(action = GithubActionsTyping())
    }

    job(
        id = "workflows_consistency_check",
        name = "Run consistency check on all GitHub workflows",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = Checkout())
        uses(
            name = "Set up Java in proper version",
            action = SetupJava(
                javaVersion = "17",
                distribution = SetupJava.Distribution.Zulu,
                cache = SetupJava.BuildPlatform.Gradle,
            ),
        )
        run(command = "cd .github/workflows")
        run(
            name = "Regenerate all workflow YAMLs",
            command = """
            find -name "*.main.kts" -print0 | while read -d ${'$'}'\0' file
            do
                echo "Regenerating ${'$'}file..."
                (${'$'}file)
            done
            """.trimIndent(),
        )
        run(
            name = "Check if some file is different after regeneration",
            command = "git diff --exit-code .",
        )
    }
}
