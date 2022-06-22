package it.krzeminski.githubactionstyping.parsing

import java.io.File

fun readActionTypesManifest(): String? =
    listOf("yaml", "yml")
        .map { "action-types.$it" }
        .firstOrNull { File(it).exists() }
        ?.let { File(it).readText() }
