package it.krzeminski.githubactionstyping.parsing

import java.io.File

fun readYamlFile(nameWithoutExtension: String): String? =
    listOf("yaml", "yml")
        .map { "$nameWithoutExtension.$it" }
        .firstOrNull { File(it).exists() }
        ?.let { File(it).readText() }
