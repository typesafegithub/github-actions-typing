package it.krzeminski.githubactionstyping

import io.kotest.common.env
import io.kotest.core.spec.style.FunSpec
import prantlf.jsonlint.ParseOptions
import prantlf.jsonlint.parse
import node.buffer.BufferEncoding.Companion.utf8
import node.fs.readFile

private val schemaFile = env("schemaFile")!!

/**
 * Validate the JSON schema using Jsonlint.
 */
class SchemaLintingTest : FunSpec({
    test("jsonlint validation") {
        parse(
            readFile(schemaFile, utf8),
            ParseOptions(
                ignoreBOM = false,
                ignoreComments = false,
                ignoreTrailingCommas = false,
                allowSingleQuotedStrings = false,
                allowDuplicateObjectKeys = false,
            )
        )
    }
})
