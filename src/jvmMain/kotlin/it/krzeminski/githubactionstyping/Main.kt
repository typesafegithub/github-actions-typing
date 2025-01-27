package it.krzeminski.githubactionstyping

import kotlin.system.exitProcess

fun main() {
    val (isValid, report) = validateTypings()
    println(report)

    if (!isValid) {
        exitProcess(1)
    }
}
