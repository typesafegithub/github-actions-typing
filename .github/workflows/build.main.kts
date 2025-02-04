#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:3.2.0")

@file:Repository("https://bindings.krzeminski.it")
@file:DependsOn("actions:checkout:v4")
@file:DependsOn("actions:setup-java:v4")
@file:DependsOn("gradle:gradle-build-action:v3")
@file:DependsOn("typesafegithub:github-actions-typing:v2")

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
        uses(
            name = "Checkout github-actions-typing",
            action = Checkout(
                path = "github-actions-typing"
            )
        )
        uses(
            name = "Checkout github-actions-typing-catalog",
            action = Checkout(
                repository = "typesafegithub/github-actions-typing-catalog",
                path = "github-actions-typing-catalog"
            )
        )
        uses(
            action = GradleBuildAction(
                buildRootDirectory = "github-actions-typing",
                arguments = "build"
            )
        )
    }

    job(
        id = "validate-types",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = Checkout())
        uses(action = GithubActionsTyping(
            ignoredActionFiles = listOf(
                "src/jvmTest/resources/test-repos/repo-with-top-level-and-nested-action-and-valid-typings/some/directory/action.yaml",
                "src/jvmTest/resources/test-repos/repo-with-top-level-and-nested-action-and-valid-typings/action.yml",
                "src/jvmTest/resources/test-repos/repo-with-top-level-and-nested-action-and-invalid-typings/some/directory/action.yaml",
                "src/jvmTest/resources/test-repos/repo-with-top-level-and-nested-action-and-invalid-typings/action.yml",
                "src/jvmTest/resources/test-repos/repo-with-no-top-level-and-just-nested-action-with-invalid-typings/some/directory/action.yaml",
                "src/jvmTest/resources/test-repos/repo-with-only-top-level-action-and-invalid-typings/action.yml",
                "src/jvmTest/resources/test-repos/repo-with-no-top-level-and-just-nested-action-with-valid-typings/some/directory/action.yaml",
                "src/jvmTest/resources/test-repos/repo-with-only-top-level-action-and-no-typings/action.yml",
                "src/jvmTest/resources/test-repos/repo-with-only-top-level-action-and-valid-typings/action.yml",
            ),
        ))
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
