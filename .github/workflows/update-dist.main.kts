#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:1.15.0")

@file:Repository("https://github-workflows-kt-bindings.colman.com.br/binding/")
@file:DependsOn("actions:checkout:v4")
@file:DependsOn("gradle:actions__setup-gradle:v3")

import io.github.typesafegithub.workflows.actions.actions.Checkout
import io.github.typesafegithub.workflows.actions.gradle.ActionsSetupGradle
import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.WorkflowDispatch
import io.github.typesafegithub.workflows.dsl.workflow
import io.github.typesafegithub.workflows.yaml.writeToFile

workflow(
    name = "Update dist",
    on = listOf(
        WorkflowDispatch(),
    ),
    sourceFile = __FILE__.toPath(),
) {
    job(
        id = "build",
        runsOn = RunnerType.UbuntuLatest,
    ) {
        uses(action = Checkout())
        uses(action = ActionsSetupGradle())
        run(command = "./gradlew build")

        run(
            name = "Regenerate the contents of dist directory",
            command = """
                set -euxo pipefail

                rm -rf dist
                unzip -qq build/distributions/github-actions-typing.zip -d dist
                rm -rf dist/github-actions-typing/bin
            """.trimIndent()
        )

        run(
            name = "Configure git",
            command = """
                git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
                git config user.name "github-actions[bot]"
            """.trimIndent()
        )

        run(
            name = "Commit changes",
            command = """
                git add .
                git commit -m "Update dist"
            """.trimIndent()
        )

        run(
            name = "Push commit",
            command = "git push",
        )
    }
}.writeToFile()
