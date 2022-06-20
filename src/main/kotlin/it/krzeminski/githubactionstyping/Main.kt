package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.parseManifest
import it.krzeminski.githubactionstyping.parsing.readActionManifest
import it.krzeminski.githubactionstyping.validation.validate

fun main() {
    println("Action's manifest:")
    val manifest = readActionManifest()
    println(manifest)

    if (manifest == null) {
        return
    }

    val parsedManifest = parseManifest(manifest)
    println("Parsed manifest:")
    println(parsedManifest)

    val validationResult = parsedManifest.validate()
    println(validationResult)
}
