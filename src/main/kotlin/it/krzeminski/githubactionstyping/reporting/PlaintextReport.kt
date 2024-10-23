package it.krzeminski.githubactionstyping.reporting

import it.krzeminski.githubactionstyping.validation.ActionValidationResult
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ActionValidationResult.toPlaintextReport(): String = buildString {
    appendLine("Result for typings for '${this@toPlaintextReport.manifestPath}':")
    this@toPlaintextReport.resultForThisAction.appendStatus(this)
    appendLine()

    appendLine("Inputs:")
    this@toPlaintextReport.inputs.forEach { (key, value) ->
        appendLine("• $key:")
        append("  ")
        value.appendStatus(this)
    }
    if (this@toPlaintextReport.inputs.isEmpty()) {
        appendLine("None.")
    }
    appendLine()

    appendLine("Outputs:")
    this@toPlaintextReport.outputs.forEach { (key, value) ->
        appendLine("• $key:")
        append("  ")
        value.appendStatus(this)
    }
    if (this@toPlaintextReport.outputs.isEmpty()) {
        appendLine("None.")
    }
    appendLine()
}

private fun ItemValidationResult.appendStatus(
    stringBuilder: StringBuilder,
) {
    when (this) {
        ItemValidationResult.Valid -> stringBuilder.appendLine(green("✔ VALID"))
        is ItemValidationResult.Invalid -> stringBuilder.appendLine(red("❌ INVALID: ${this.message}"))
    }
}

private fun green(text: String) = "\u001b[32m$text\u001b[0m"
private fun red(text: String) = "\u001b[31m$text\u001b[0m"
