#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:3.0.0")

@file:Repository("https://bindings.krzeminski.it")
@file:DependsOn("actions:checkout:v4")
@file:DependsOn("gradle:actions__setup-gradle:v4")

import io.github.typesafegithub.workflows.actions.actions.Checkout
import io.github.typesafegithub.workflows.actions.gradle.ActionsSetupGradle
import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.WorkflowDispatch
import io.github.typesafegithub.workflows.dsl.expressions.expr
import io.github.typesafegithub.workflows.dsl.workflow

workflow(
    name = "Release",
    on = listOf(
        WorkflowDispatch(
            inputs = mapOf(
                "version" to WorkflowDispatch.Input(
                    type = WorkflowDispatch.Type.String,
                    required = true,
                    description = "Used for the tag and the version name. E.g. v1.2.3.",
                )
            ),
        ),
    ),
    sourceFile = __FILE__,
) {
    job(
        id = "release",
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

        val tempBranchName = "temp-branch-for-release"

        run(
            name = "Commit changes",
            command = """
                git checkout -b $tempBranchName
                git add .
                git commit -m "Update dist"
            """.trimIndent()
        )

        run(
            name = "Push commit",
            command = "git push --set-upstream origin $tempBranchName",
        )

        val versionExpr = expr { "github.event.inputs.version" }

        run(
            name = "Create and push tag",
            command = """
                git tag -a "$versionExpr" -m "Release version $versionExpr"
                git push origin "$versionExpr"
            """.trimIndent()
        )

        run(
            name = "Delete temp branch",
            command = "git push origin --delete $tempBranchName"
        )
    }
}
