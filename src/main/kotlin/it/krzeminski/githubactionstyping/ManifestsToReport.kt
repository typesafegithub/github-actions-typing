package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.TypesManifest
import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.parseTypesManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.buildInputOutputMismatchValidationResult
import it.krzeminski.githubactionstyping.validation.validate
import java.nio.file.Path

fun manifestsToReport(manifestPath: Path, manifest: String, typesManifest: String): Pair<Boolean, String> {
    val parsedTypesManifest = if (typesManifest.isNotBlank()) {
        parseTypesManifest(typesManifest)
    } else {
        TypesManifest()
    }
    val parsedManifest = parseManifest(manifest)

    val inputsInTypesManifest = parsedTypesManifest.inputs.keys
    val inputsInManifest = parsedManifest.inputs.keys

    val outputsInTypesManifest = parsedTypesManifest.outputs.keys
    val outputsInManifest = parsedManifest.outputs.keys

    if (inputsInManifest != inputsInTypesManifest || outputsInManifest != outputsInTypesManifest) {
        val inputOutputMismatchValidationResult = buildInputOutputMismatchValidationResult(
            manifestPath = manifestPath,
            inputsInManifest = inputsInManifest,
            inputsInTypesManifest = inputsInTypesManifest,
            outputsInManifest = outputsInManifest,
            outputsInTypesManifest = outputsInTypesManifest,
        )
        return Pair(false, inputOutputMismatchValidationResult.toPlaintextReport())
    }

    printlnDebug("Action's manifest:")
    printlnDebug(manifest)

    printlnDebug("Parsed manifest:")
    printlnDebug(parsedManifest)

    printlnDebug("Action's types manifest:")
    printlnDebug(typesManifest)

    printlnDebug("Parsed types manifest:")
    printlnDebug(parsedTypesManifest)

    printlnDebug()
    printlnDebug("==============================================")
    printlnDebug()

    val validationResult = parsedTypesManifest.validate(manifestPath)
    val isValid = validationResult.overallResult is ItemValidationResult.Valid
    val report = validationResult.toPlaintextReport()

    return Pair(isValid, report)
}

private fun printlnDebug(string: Any? = null) =
    (string ?: "").toString().lines()
        .map { "::debug::$it" }
        .forEach { println(it) }
