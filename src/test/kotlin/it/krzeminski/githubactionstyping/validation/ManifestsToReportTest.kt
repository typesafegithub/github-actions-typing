package it.krzeminski.githubactionstyping.validation

import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import it.krzeminski.githubactionstyping.manifestsToReport
import java.nio.file.Path

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
        val (isValid, report) = manifestsToReport(
            manifestPath = Path.of("action.yml"), manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                Result for typings for 'action.yml':
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

    test("success case with anchor and alias") {
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
              someEnum2:
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
                allowed-values: &enum-allowed-values
                 - foo
                 - bar
              someEnum2:
                type: enum
                allowed-values: *enum-allowed-values
        """.trimIndent()

        // when
        val (isValid, report) = manifestsToReport(
            manifestPath = Path.of("action.yml"), manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                Result for typings for 'action.yml':
                ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Inputs:
                • verbose:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • someEnum2:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Outputs:
                None.


            """.trimIndent()
        }
    }

    test("blank types YAML") {
        // when
        val manifest = """
            name: GitHub Actions Typing
            description: Bring type-safety to your GitHub actions' API!
            author: Piotr Krzemiński
            runs:
              using: 'docker'
              image: 'Dockerfile'
        """.trimIndent()
        val typesManifest = " "

        // when
        val (isValid, report) = manifestsToReport(
            manifestPath = Path.of("action.yml"), manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe true
            report shouldBe """
                Result for typings for 'action.yml':
                ${'\u001b'}[32m✔ VALID${'\u001b'}[0m

                Inputs:
                None.
                
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
        val (isValid, report) = manifestsToReport(
            manifestPath = Path.of("action.yml"), manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe false
            report shouldBe """
                Result for typings for 'action.yml':
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

    test("inputs mismatch between action manifest and types manifest") {
        // when
        val manifest = """
            name: GitHub Actions Typing
            description: Bring type-safety to your GitHub actions' API!
            author: Piotr Krzemiński
            inputs:
              foo:
                description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
                required: false
              bar:
                description: 'Testing enum'
                required: false
            outputs:
              goo:
                description: 'Set to true to display debug information helpful when troubleshooting issues with this action.'
              zoo:
                description: 'Testing enum'
        """.trimIndent()
        val typesManifest = """
            inputs:
              foo:
                type: boolean
              baz:
                type: enum
                allowed-values:
                 - foo
                 - bar
            outputs:
              goo:
                type: boolean
              boo:
                type: enum
        """.trimIndent()

        // when
        val (isValid, report) = manifestsToReport(
            manifestPath = Path.of("action.yml"), manifest, typesManifest)

        // then
        assertSoftly {
            isValid shouldBe false
            report shouldBe """
                Result for typings for 'action.yml':
                ${'\u001b'}[31m❌ INVALID: Input/output mismatch detected. Please fix it first, then rerun to see other possible violations.${'\u001b'}[0m

                Inputs:
                • foo:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • bar:
                  ${'\u001b'}[31m❌ INVALID: This input doesn't exist in the types manifest.${'\u001b'}[0m
                • baz:
                  ${'\u001b'}[31m❌ INVALID: This input doesn't exist in the action manifest.${'\u001b'}[0m

                Outputs:
                • goo:
                  ${'\u001b'}[32m✔ VALID${'\u001b'}[0m
                • zoo:
                  ${'\u001b'}[31m❌ INVALID: This output doesn't exist in the types manifest.${'\u001b'}[0m
                • boo:
                  ${'\u001b'}[31m❌ INVALID: This output doesn't exist in the action manifest.${'\u001b'}[0m


            """.trimIndent()
        }
    }
})
