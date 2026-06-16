#!/usr/bin/env kotlin
@file:Repository("https://repo1.maven.org/maven2/")
@file:DependsOn("io.github.typesafegithub:github-workflows-kt:3.7.0")

@file:Repository("https://bindings.krzeminski.it")
@file:DependsOn("actions:checkout:v6")

import io.github.typesafegithub.workflows.domain.RunnerType
import io.github.typesafegithub.workflows.domain.triggers.IssueComment
import io.github.typesafegithub.workflows.dsl.expressions.expr
import io.github.typesafegithub.workflows.dsl.workflow
import io.github.typesafegithub.workflows.yaml.CheckoutActionVersionSource
import io.github.typesafegithub.workflows.yaml.DEFAULT_CONSISTENCY_CHECK_JOB_CONFIG
import io.github.typesafegithub.workflows.actions.actions.Checkout

workflow(
    name = "Regenerate yarn.lock",
    on = listOf(
        IssueComment()
    ),
    consistencyCheckJobConfig = DEFAULT_CONSISTENCY_CHECK_JOB_CONFIG.copy(
        checkoutActionVersion = CheckoutActionVersionSource.InferFromClasspath(),
    ),
    sourceFile = __FILE__,
) {
    job(
        id = "regenerate-yarn-lock",
        runsOn = RunnerType.UbuntuLatest,
        `if` = expr("github.event.issue.pull_request")
    ) {
        run(
            name = "Print comment",
            command = "echo \"Comment: '${expr("github.event.comment.body")}'\"",
        )
        uses(
            action = Checkout(),
            `if` = expr("github.event.comment.body == 'regenerate-lock'"),
        )
        run(
            name = "Checkout PR branch",
            command = "gh pr checkout ${expr("github.event.issue.pull_request.number")}",
            `if` = expr("github.event.comment.body == 'regenerate-lock'"),
        )
        run(
            name = "Regenerate yarn.lock",
            command = "./gradlew kotlinUpgradeYarnLock",
            `if` = expr("github.event.comment.body == 'regenerate-lock'"),
        )
        run(
            name = "Configure git",
            command = """
                git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
                git config user.name "github-actions[bot]"
            """.trimIndent(),
            `if` = expr("github.event.comment.body == 'regenerate-lock'"),
        )
        run(
            name = "Commit and push yarn.lock",
            command = """
                git add kotlin-js-store/yarn.lock
                git diff --cached --exit-code || git commit -m "Regenerate yarn.lock"
                git push
            """.trimIndent(),
            `if` = expr("github.event.comment.body == 'regenerate-lock'"),
        )
    }
}
