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

workflow(
    name = "Build",
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
        `if` = expr("!github.event.issue.pull_request")
    ) {
        run(
            name = "Run command",
            command = "echo ${expr("github.event.issue_comment")}",
        )
    }
}
