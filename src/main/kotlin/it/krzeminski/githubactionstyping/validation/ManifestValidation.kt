package it.krzeminski.githubactionstyping.validation

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.parsing.Manifest

const val expectedTypingSpec = "krzema12/github-actions-typing@v0.1"

fun Manifest.validate(): ActionValidationResult {
    if (this.typingSpec == null || this.typingSpec != expectedTypingSpec) {
        return ActionValidationResult(
            overallResult = ItemValidationResult.Invalid(
                "Set top-level 'typingSpec' attribute to '$expectedTypingSpec', was: ${typingSpec?.let { "'$it'" }}"
            )
        )
    }

    val inputValidationResults = this.inputs.mapValues { (_, value) -> value.validate() }
    val outputValidationResults = this.outputs.mapValues { (_, value) -> value.validate() }
    val isSomethingInvalid = (inputValidationResults.values + outputValidationResults.values)
        .any { it != ItemValidationResult.Valid }

    return ActionValidationResult(
        overallResult = if (isSomethingInvalid) ItemValidationResult.Invalid("Some typing is invalid.") else ItemValidationResult.Valid,
        inputs = inputValidationResults,
        outputs = outputValidationResults,
    )
}

private fun ApiItem.validate(): ItemValidationResult {
    if (this.type == null) {
        return ItemValidationResult.Invalid("Type must be specified. Use 'type' attribute.")
    }

    return when (this.type) {
        "string" -> ItemValidationResult.Valid
        "boolean" -> ItemValidationResult.Valid
        "integer" -> ItemValidationResult.Valid
        "float" -> ItemValidationResult.Valid
        else -> ItemValidationResult.Invalid("Unknown type: '${this.type}'.")
    }
}

data class ActionValidationResult(
    val overallResult: ItemValidationResult,
    val inputs: Map<String, ItemValidationResult> = emptyMap(),
    val outputs: Map<String, ItemValidationResult> = emptyMap(),
)

sealed interface ItemValidationResult {
    object Valid : ItemValidationResult
    data class Invalid(val message: String) : ItemValidationResult
}
