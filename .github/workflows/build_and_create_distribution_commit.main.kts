#!/usr/bin/env kotlin
@file:DependsOn("it.krzeminski:github-actions-kotlin-dsl:0.19.0")

import it.krzeminski.githubactions.actions.actions.CheckoutV3
import it.krzeminski.githubactions.actions.gradle.GradleBuildActionV2
import it.krzeminski.githubactions.domain.RunnerType
import it.krzeminski.githubactions.domain.triggers.Push
import it.krzeminski.githubactions.dsl.workflow
import it.krzeminski.githubactions.yaml.writeToFile

workflow(
    name = "Build and create distribution commit",
    on = listOf(Push(branchesIgnore = listOf("main"))),
    sourceFile = __FILE__.toPath(),
) {
    job(
        id = "build",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(CheckoutV3())
        uses(GradleBuildActionV2(arguments = "build"))

        run(
            name = "Update contents of 'dist' directory",
            command = "rm -rf dist/ && cp -R build/js dist",
        )

        run(
            name = "Commit and push",
            command = """
                git config --global user.email "<>"
                git config --global user.name "GitHub Actions Bot"
                git add dist/
                git commit -m "Update distribution for ${'$'}GITHUB_SHA"
                git push
            """.trimIndent()
        )
    }
}.writeToFile()
