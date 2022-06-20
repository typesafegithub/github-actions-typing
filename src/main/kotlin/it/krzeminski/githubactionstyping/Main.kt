package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.github.getBooleanInput
import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.readActionManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.validate
import kotlin.system.exitProcess

fun main() {
    val manifest = readActionManifest() ?: return
    val parsedManifest = parseManifest(manifest)

    if (getBooleanInput("verbose")) {
        println("Action's manifest:")
        println(manifest)

        println("Parsed manifest:")
        println(parsedManifest)

        println()
        println("==============================================")
        println()
    }

    val validationResult = parsedManifest.validate()
    println(validationResult.toPlaintextReport())

    if (validationResult.overallResult is ItemValidationResult.Invalid) {
        exitProcess(1)
    }
}
