package it.krzeminski.githubactionstyping.parsing

import java.nio.file.Path
import kotlin.io.path.exists
import kotlin.io.path.readText

fun Path.readYamlFile(nameWithoutExtension: String): Pair<String, Path>? =
    listOf("yaml", "yml")
        .map { "$nameWithoutExtension.$it" }
        .firstOrNull { this.resolve(it).exists() }
        ?.let { this.resolve(it).let { Pair(it.readText(), it) } }
