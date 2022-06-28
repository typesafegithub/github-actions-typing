package it.krzeminski.githubactionstyping.validation

import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import it.krzeminski.githubactionstyping.manifestsToReport

class ManifestsToReportTest : FunSpec({
    test("success case") {
        // when
        val manifest = """
            name: GitHub Actions Typing
            description: Bring type-safety to your GitHub actions' API!
            author: Piotr Krzemiński
            inputs:
              verbose:
                description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
                required: false
                default: 'false'
              someEnum:
                description: 'Testing enum'
                required: false
            runs:
              using: 'docker'
              image: 'Dockerfile'
        """.trimIndent()
        val typesManifest = """
            inputs:
              verbose:
                type: boolean
              someEnum:
                type: enum
                allowed-values:
                 - foo
                 - bar
        """.trimIndent()

        // when
        val (isValid, report) = manifestsToReport(manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                Overall result: 
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

    test("enum: missing allowed values") {
        // when
        val manifest = """
            name: GitHub Actions Typing
            description: Bring type-safety to your GitHub actions' API!
            author: Piotr Krzemiński
            inputs:
              verbose:
                description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
                required: false
                default: 'false'
              someEnum:
                description: 'Testing enum'
                required: false
            runs:
              using: 'docker'
              image: 'Dockerfile'
        """.trimIndent()
        val typesManifest = """
            inputs:
              verbose:
                type: boolean
              someEnum:
                type: enum
        """.trimIndent()

        // when
        val (isValid, report) = manifestsToReport(manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe false
            report shouldBe """
                Overall result: 
                ${'\u001b'}[31m❌ INVALID: Some typing is invalid.${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[31m❌ INVALID: Allowed values must be specified.${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }
})
