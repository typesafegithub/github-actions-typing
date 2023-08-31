#!/usr/bin/env kotlin
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:1.0.0")

import io.github.typesafegithub.workflows.actions.actions.CheckoutV3
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
        uses(action = CheckoutV3())
        uses(action = GradleBuildActionV2(arguments = "build"))
    }

    job(
        id = "validate-types",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV3())
        uses(action = GithubActionsTypingV1())
    }

    job(
        id = "workflows_consistency_check",
        name = "Run consistency check on all GitHub workflows",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV3())
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
