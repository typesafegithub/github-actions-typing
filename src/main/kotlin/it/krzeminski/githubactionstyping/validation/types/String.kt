package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateString(): ItemValidationResult {
    if (this.allowedValues != null) {
        return ItemValidationResult.Invalid("'allowedValues' is not allowed for this type.")
    }
    if (this.separator != null) {
        return ItemValidationResult.Invalid("'separator' is not allowed for this type.")
    }
    if (this.listItem != null) {
        return ItemValidationResult.Invalid("'listItem' is not allowed for this type.")
    }
    if (this.namedValues != null) {
        return ItemValidationResult.Invalid("'namedValues' are currently supported only for integers.")
    }

    return ItemValidationResult.Valid
}