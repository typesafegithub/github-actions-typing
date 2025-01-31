package it.krzeminski.githubactionstyping

import io.kotest.assertions.assertSoftly
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.datatest.withData
import io.kotest.matchers.file.shouldBeADirectory
import io.kotest.matchers.file.shouldNotBeEmptyDirectory
import io.kotest.matchers.should
import io.kotest.matchers.shouldBe
import io.kotest.matchers.types.beOfType
import io.kotest.mpp.sysprop
import it.krzeminski.githubactionstyping.parsing.parseTypesManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.validate
import java.io.File

private val catalogDir = File(sysprop("catalogDir")!!)
private val externalDir = File(sysprop("externalDir")!!)
private val goodDir = File(sysprop("goodDir")!!)
private val badDir = File(sysprop("badDir")!!)

/**
 * Validate that the action validation logic agrees with the Json Schema.
 */
class LogicConsistencyTest : FunSpec({
    beforeSpec {
        catalogDir.shouldBeADirectory()
        catalogDir.shouldNotBeEmptyDirectory()
    }

    context("catalog typings") {
        withData(
            nameFn = { it.name },
            catalogDir.listFiles()!!.asSequence()
        ) {
            val validationResult = parseTypesManifest(it.readText()).validate(it.toPath().fileName)
            withClue(validationResult.toPlaintextReport()) {
                validationResult.overallResult shouldBe ItemValidationResult.Valid
            }
        }
    }

    if (externalDir.isDirectory) {
        context("external typings") {
            withData(
                nameFn = { it.name },
                externalDir.listFiles()!!.asSequence()
            ) {
                val validationResult = parseTypesManifest(it.readText()).validate(it.toPath().fileName)
                withClue(validationResult.toPlaintextReport()) {
                    validationResult.overallResult shouldBe ItemValidationResult.Valid
                }
            }
        }
    }

    context("valid typings") {
        withData(
            nameFn = { it.name },
            goodDir.listFiles()!!.asSequence()
        ) {
            val validationResult = parseTypesManifest(it.readText()).validate(it.toPath().fileName)
            withClue(validationResult.toPlaintextReport()) {
                validationResult.overallResult shouldBe ItemValidationResult.Valid
            }

        }
    }

    context("invalid typings") {
        withData(
            nameFn = { it.name },
            badDir.listFiles()!!.asSequence()
        ) {
            val typesManifest = it.readText()
            val expectedValidationError = typesManifest
                .split("\n# Expected validation error\n")[1]
                .trimMargin("#")
                .trim()

            val validationResult = parseTypesManifest(typesManifest).validate(it.toPath().fileName)
            assertSoftly {
                validationResult.overallResult should beOfType<ItemValidationResult.Invalid>()
                validationResult
                    .toPlaintextReport()
                    .trim()
                    .replace("\u001B", "\\x1B")
                    .shouldBe(expectedValidationError)
            }
        }
    }
})
