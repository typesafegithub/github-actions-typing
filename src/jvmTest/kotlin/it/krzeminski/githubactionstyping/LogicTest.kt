package it.krzeminski.githubactionstyping

import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import java.io.File
import java.nio.file.Path

class LogicTest : FunSpec({
    val testRepos: Path = javaClass.classLoader.getResource("test-repos").let {
        File(it.toURI()).toPath()
    }

    test("repo with only top-level action and valid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-only-top-level-action-and-valid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                For action with manifest at 'action.yml':
                Result:
                ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }

    test("repo with only top-level action and invalid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-only-top-level-action-and-invalid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe false
            report shouldBe """
                For action with manifest at 'action.yml':
                Result:
                ${'\u001b'}[31m❌ INVALID: Some typing is invalid.${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[31m❌ INVALID: 'allowed-values' is not allowed for this type.${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }

    test("repo with only top-level action and no typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-only-top-level-action-and-no-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe false
            report shouldBe "No types manifest (action-types.yml or action-types.yaml) found!"
        }
    }

    test("repo with top-level action with valid typings, and nested action and all valid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-top-level-and-nested-action-and-valid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                For action with manifest at 'action.yml':
                Result:
                ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }

    test("repo with top-level action with valid typings, and nested action with invalid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-top-level-and-nested-action-and-invalid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                For action with manifest at 'action.yml':
                Result:
                ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }

    test("repo with no top-level action, but with nested action with valid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-no-top-level-and-just-nested-action-with-valid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe false
            report shouldBe "No action manifest (action.yml or action.yaml) found!"
        }
    }

    test("repo with no top-level action, but with nested action with invalid typings") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-no-top-level-and-just-nested-action-with-invalid-typings"),
        )

        // Then
        assertSoftly {
            isValid shouldBe false
            report shouldBe "No action manifest (action.yml or action.yaml) found!"
        }
    }

    test("repo with only top-level action and no top-level manifest") {
        // When
        val (isValid, report) = validateTypings(
            repoRoot = testRepos.resolve("repo-with-only-top-level-action-and-no-top-level-manifest"),
        )

        // Then
        assertSoftly {
            isValid shouldBe false
            report shouldBe "No action manifest (action.yml or action.yaml) found!"
        }
    }
})
