package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateEnum(): ItemValidationResult {
    if (this.allowedValues == null) {
        return ItemValidationResult.Invalid("Allowed values must be specified.")
    }
    if (this.allowedValues.size < 2) {
        return ItemValidationResult.Invalid("There must be at least two allowed values.")
    }
    return ItemValidationResult.Valid
}
