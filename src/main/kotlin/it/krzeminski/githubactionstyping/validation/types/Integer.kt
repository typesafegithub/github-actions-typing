package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateInteger(): ItemValidationResult {
    if (this.name != null) {
        return ItemValidationResult.Invalid("'name' is not allowed for this type.")
    }
    if (this.allowedValues != null) {
        return ItemValidationResult.Invalid("'allowed-values' is not allowed for this type.")
    }
    if (this.separator != null) {
        return ItemValidationResult.Invalid("'separator' is not allowed for this type.")
    }
    if (this.listItem != null) {
        return ItemValidationResult.Invalid("'list-item' is not allowed for this type.")
    }

    return ItemValidationResult.Valid
}
