package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateInteger(): ItemValidationResult {
    if (this.allowedValues != null) {
        return ItemValidationResult.Invalid("'allowedValues' is not allowed for this type.")
    }

    return ItemValidationResult.Valid
}
