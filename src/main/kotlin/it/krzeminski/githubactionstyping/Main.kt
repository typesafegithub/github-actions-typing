package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.readActionManifest
import it.krzeminski.githubactionstyping.reporting.toPlaintextReport
import it.krzeminski.githubactionstyping.validation.validate

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
}
