#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:3.1.0")
@file:DependsOn("org.jetbrains.kotlinx:kotlinx-serialization-json:1.8.0")

@file:Repository("https://bindings.krzeminski.it")
@file:DependsOn("actions:checkout:v4")
@file:DependsOn("gradle:actions__setup-gradle:v4")
@file:OptIn(ExperimentalKotlinLogicStep::class)

import io.github.typesafegithub.workflows.actions.actions.Checkout
import io.github.typesafegithub.workflows.actions.gradle.ActionsSetupGradle
import io.github.typesafegithub.workflows.annotations.ExperimentalKotlinLogicStep
import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.WorkflowDispatch
import io.github.typesafegithub.workflows.dsl.expressions.expr
import io.github.typesafegithub.workflows.dsl.workflow
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.contentOrNull
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive

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
            name = "Create and push a patch version tag",
            command = """
                git tag -a "$versionExpr" -m "Release version $versionExpr"
                git push origin "$versionExpr"
            """.trimIndent()
        )

        val MAJOR_VERSION_OUTPUT_NAME = "majorVersion"

        val extractMajorVersion = run {
            // There should be a way to access the inputs using the DSL.
            // TODO: https://github.com/typesafegithub/github-workflows-kt/issues/1685
            val githubContextJson = System.getenv("GHWKT_GITHUB_CONTEXT_JSON")!!
            val version: String = Json.parseToJsonElement(githubContextJson)
                .jsonObject["event"]
                ?.jsonObject?.get("inputs")
                ?.jsonObject?.get("version")
                ?.jsonPrimitive?.contentOrNull
                ?: error("Version couldn't be extracted from input")
            val majorVersion = version.substringBefore(".")
            outputs[MAJOR_VERSION_OUTPUT_NAME] = majorVersion
        }

        val majorVersionExpr = expr { "steps.${extractMajorVersion.id}.outputs.$MAJOR_VERSION_OUTPUT_NAME" }

        run(
            name = "Create or update a major version branch",
            command = """
                git branch -D "$majorVersionExpr" || true
                git checkout -b "$majorVersionExpr"
                git push origin "$majorVersionExpr" -f
            """.trimIndent()
        )

        run(
            name = "Delete temp branch",
            command = "git push origin --delete $tempBranchName"
        )
    }
}
