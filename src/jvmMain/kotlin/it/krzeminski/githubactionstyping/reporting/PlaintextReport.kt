package it.krzeminski.githubactionstyping.reporting

import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.RepoValidationResult

fun RepoValidationResult.toPlaintextReport(): String = buildString {
    this@toPlaintextReport.pathToActionValidationResult.forEach { (path, resultForAction) ->
        appendLine("For action with manifest at '$path':")
        appendLine("Result:")
        resultForAction.overallResult.appendStatus(this)
        appendLine()

        appendLine("Inputs:")
        resultForAction.inputs.forEach { (key, value) ->
            appendLine("• $key:")
            append("  ")
            value.appendStatus(this)
        }
        if (resultForAction.inputs.isEmpty()) {
            appendLine("None.")
        }
        appendLine()

        appendLine("Outputs:")
        resultForAction.outputs.forEach { (key, value) ->
            appendLine("• $key:")
            append("  ")
            value.appendStatus(this)
        }
        if (resultForAction.outputs.isEmpty()) {
            appendLine("None.")
        }
        appendLine()
    }
}

internal fun ItemValidationResult.appendStatus(
    stringBuilder: StringBuilder,
) {
    when (this) {
        ItemValidationResult.Valid -> stringBuilder.appendLine(green("✔ VALID"))
        is ItemValidationResult.Invalid -> stringBuilder.appendLine(red("❌ INVALID${this.message?.let{ ": $it" } ?: ""}"))
    }
}

private fun green(text: String) = "\u001b[32m$text\u001b[0m"
private fun red(text: String) = "\u001b[31m$text\u001b[0m"
