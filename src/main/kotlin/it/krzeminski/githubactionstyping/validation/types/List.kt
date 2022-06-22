package it.krzeminski.githubactionstyping.validation.types

import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import it.krzeminski.githubactionstyping.validation.validate

fun ApiItem.validateList(): ItemValidationResult {
    if (this.listItem == null) {
        return ItemValidationResult.Invalid("List item information must be specified.")
    }
    if (this.separator == null) {
        return ItemValidationResult.Invalid("Separator must be specified.")
    }
    if (this.allowedValues != null) {
        return ItemValidationResult.Invalid("'allowedValues' is not allowed for this type.")
    }
    return when (this.listItem.type) {
        "string" -> this.listItem.validateString()
        "boolean" -> this.listItem.validateBoolean()
        "integer" -> this.listItem.validateInteger()
        "float" -> this.listItem.validateFloat()
        "enum" -> this.listItem.validateEnum()
        "list" -> ItemValidationResult.Invalid("List can be parameterized only with a primitive or enum type.")
        else -> ItemValidationResult.Invalid("Unknown type: '${this.listItem.type}'.")
    }.let {
        when (it) {
            is ItemValidationResult.Invalid -> it.copy(message = "List item type: ${it.message}")
            ItemValidationResult.Valid -> it
        }
    }
}
