#!/usr/bin/env kotlin
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:1.6.0")

import io.github.typesafegithub.workflows.actions.actions.CheckoutV4
import io.github.typesafegithub.workflows.actions.actions.SetupJavaV3
import io.github.typesafegithub.workflows.actions.gradle.GradleBuildActionV2
import io.github.typesafegithub.workflows.actions.typesafegithub.GithubActionsTypingV1
import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.PullRequest
import io.github.typesafegithub.workflows.domain.triggers.Push
import io.github.typesafegithub.workflows.dsl.workflow
import io.github.typesafegithub.workflows.yaml.writeToFile

workflow(
    name = "Build",
    on = listOf(
        Push(branches = listOf("main")),
        PullRequest(),
    ),
    sourceFile = __FILE__.toPath(),
) {
    job(
        id = "build",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV4())
        uses(action = GradleBuildActionV2(arguments = "build"))

        run(
            name = "Check if the produced files are committed correctly",
            command = """
                for jar in dist/**/*.jar; do
                    echo "Extracting ${'$'}jar..."
                    filename=${'$'}(basename -- "${'$'}jar")
                    filename="${'$'}{filename%.*}"

                    targetDir="dist-unzipped/${'$'}filename"
                    echo "Target directory: ${'$'}targetDir"

                    mkdir -p "${'$'}targetDir"
                    unzip "${'$'}jar" -d "${'$'}targetDir"
                done

                git add dist-unzipped/
                git commit -m "Add unzipped JARs"

                rm -rf dist
                unzip build/distributions/github-actions-typing.zip -d dist

                rm -rf dist-unzipped

                for jar in dist/**/*.jar; do
                    echo "Extracting ${'$'}jar..."
                    filename=${'$'}(basename -- "${'$'}jar")
                    filename="${'$'}{filename%.*}"

                    targetDir="dist-unzipped/${'$'}filename"
                    echo "Target directory: ${'$'}targetDir"

                    mkdir -p "${'$'}targetDir"
                    unzip "${'$'}jar" -d "${'$'}targetDir"
                done

                git add dist-unzipped
                git diff --cached --exit-code dist-unzipped
            """.trimIndent()
        )
    }

    job(
        id = "validate-types",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV4())
        uses(action = GithubActionsTypingV1())
    }

    job(
        id = "workflows_consistency_check",
        name = "Run consistency check on all GitHub workflows",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV4())
        uses(
            name = "Set up Java in proper version",
            action = SetupJavaV3(
                javaVersion = "17",
                distribution = SetupJavaV3.Distribution.Zulu,
                cache = SetupJavaV3.BuildPlatform.Gradle,
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
}.writeToFile()
