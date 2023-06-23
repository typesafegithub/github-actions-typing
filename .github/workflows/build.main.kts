#!/usr/bin/env kotlin
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:0.46.0")

import io.github.typesafegithub.workflows.actions.actions.CheckoutV3
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
        id = "build_kotlin_scripts",
        name = "Build Kotlin scripts",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = CheckoutV3())
        run(command = "find -name '*.main.kts' | xargs kotlinc")
    }
}.writeToFile()
