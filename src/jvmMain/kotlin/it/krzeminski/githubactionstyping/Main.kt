package it.krzeminski.githubactionstyping

import kotlin.system.exitProcess

fun main() {
    val (isValid, report) = validateTypings(
        ignoredActionFiles = readIgnoredActionFiles(),
    )
    println(report)

    if (!isValid) {
        exitProcess(1)
    }
}

private fun readIgnoredActionFiles(): List<String> =
    System.getenv("INPUT_ignored-action-files")?.split("\n") ?: emptyList()
