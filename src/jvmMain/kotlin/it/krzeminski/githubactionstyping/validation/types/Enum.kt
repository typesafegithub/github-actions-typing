package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult

fun ApiItem.validateEnum(): ItemValidationResult {
    if (this.allowedValues == null) {
        return ItemValidationResult.Invalid("Allowed values must be specified.")
    }
    if (this.separator != null) {
        return ItemValidationResult.Invalid("'separator' is not allowed for this type.")
    }
    if (this.listItem != null) {
        return ItemValidationResult.Invalid("'list-item' is not allowed for this type.")
    }
    if (this.namedValues != null) {
        return ItemValidationResult.Invalid("'named-values' are currently supported only for integers.")
    }
    if (this.allowedValues.isEmpty()) {
        return ItemValidationResult.Invalid("There must be at least one allowed value.")
    }
    return ItemValidationResult.Valid
}
