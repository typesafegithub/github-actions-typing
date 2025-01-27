package it.krzeminski.githubactionstyping.validation

import java.nio.file.Path

data class RepoValidationResult(
    val overallResult: ItemValidationResult,
    val pathToActionValidationResult: Map<Path, ActionValidationResult>,
)

data class ActionValidationResult(
    val overallResult: ItemValidationResult,
    val inputs: Map<String, ItemValidationResult> = emptyMap(),
    val outputs: Map<String, ItemValidationResult> = emptyMap(),
)

sealed interface ItemValidationResult {
    data object Valid : ItemValidationResult
    data class Invalid(val message: String) : ItemValidationResult
}
