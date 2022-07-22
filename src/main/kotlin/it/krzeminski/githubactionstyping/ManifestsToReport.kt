package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.github.getBooleanInput
import it.krzeminski.githubactionstyping.parsing.TypesManifest
import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.parseTypesManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.validate

fun manifestsToReport(manifest: String, typesManifest: String): Pair<Boolean, String> {
    val parsedTypesManifest = if (typesManifest.isNotBlank()) {
        parseTypesManifest(typesManifest)
    } else {
        TypesManifest()
    }
    val parsedManifest = parseManifest(manifest)

    val inputsInTypesManifest = parsedTypesManifest.inputs.keys
    val inputsInManifest = parsedManifest.inputs.keys

    if (inputsInManifest != inputsInTypesManifest) {
        throw IllegalStateException("The same set of inputs should exist in action manifest and types manifest!")
    }

    val outputsInTypesManifest = parsedTypesManifest.outputs.keys
    val outputsInManifest = parsedManifest.outputs.keys

    if (outputsInManifest != outputsInTypesManifest) {
        throw IllegalStateException("The same set of outputs should exist in action manifest and types manifest!")
    }

    if (getBooleanInput("verbose")) {
        println("Action's manifest:")
        println(manifest)

        println("Parsed manifest:")
        println(parsedManifest)

        println("Action's types manifest:")
        println(typesManifest)

        println("Parsed types manifest:")
        println(parsedTypesManifest)

        println()
        println("==============================================")
        println()
    }

    val validationResult = parsedTypesManifest.validate()
    val isValid = validationResult.overallResult is ItemValidationResult.Valid
    val report = validationResult.toPlaintextReport()

    return Pair(isValid, report)
}
