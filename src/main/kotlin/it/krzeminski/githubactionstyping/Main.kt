package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.readActionManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.validate
import kotlin.system.exitProcess

fun main() {
    println("Action's manifest:")
    val manifest = readActionManifest() ?: return
    println(manifest)

    val parsedManifest = parseManifest(manifest)
    println("Parsed manifest:")
    println(parsedManifest)

    val validationResult = parsedManifest.validate()

    println()
    println("==============================================")
    println()

    println(validationResult.toPlaintextReport())

    if (validationResult.overallResult is ItemValidationResult.Invalid) {
        exitProcess(1)
    }
}
