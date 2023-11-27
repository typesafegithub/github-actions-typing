package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import kotlin.system.exitProcess

fun main() {
    val typesManifest = readYamlFile("action-types") ?: run {
        println("TestNo types manifest (action-types.yml or action-types.yaml) found!")
        exitProcess(1)
        throw IllegalStateException()
    }

    val manifest = readYamlFile("action") ?: run {
        println("No action manifest (action.yml or action.yaml) found!")
        exitProcess(1)
        throw IllegalStateException()
    }

    val (isValid, report) = manifestsToReport(manifest, typesManifest)
    println(report)

    if (!isValid) {
        exitProcess(1)
    }
}
