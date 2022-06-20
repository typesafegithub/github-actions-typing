package it.krzeminski.githubactionstyping.github

import java.util.*

fun getStringInput(inputName: String): String? {
    val envVarName = "INPUT_${inputName.uppercase(Locale.getDefault())}"
    return System.getenv(envVarName)
}

fun getBooleanInput(inputName: String): Boolean =
    getStringInput(inputName)?.toBoolean() ?: false
