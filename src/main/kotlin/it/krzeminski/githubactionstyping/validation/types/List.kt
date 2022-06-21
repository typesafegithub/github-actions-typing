package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateList(): ItemValidationResult {
    if (this.separator == null) {
        return ItemValidationResult.Invalid("Separator must be specified.")
    }
    if (this.allowedValues != null) {
        return ItemValidationResult.Invalid("'allowedValues' is not allowed for this type.")
    }

    return ItemValidationResult.Valid
}
