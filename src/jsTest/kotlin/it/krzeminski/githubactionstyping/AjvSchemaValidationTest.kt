package it.krzeminski.githubactionstyping

import ajv.Ajv
import ajv.ValidateFunction
import io.kotest.assertions.withClue
import io.kotest.core.spec.style.FunSpec
import io.kotest.datatest.withData
import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.booleans.shouldBeTrue
import io.kotest.matchers.nulls.shouldNotBeNull
import io.kotest.matchers.should
import io.kotest.matchers.shouldNot
import io.kotest.mpp.env
import node.buffer.BufferEncoding.Companion.utf8
import node.fs.exists
import node.fs.existsSync
import node.fs.opendir
import node.fs.readFile
import node.fs.readdirSync
import node.fs.stat
import node.path.path
import ajv.Options as AjvOptions

private val schemaFile = env("schemaFile")!!
private val catalogDir = env("catalogDir")!!
private val externalDir = env("externalDir")!!
private val goodDir = env("goodDir")!!
private val badDir = env("badDir")!!

private lateinit var validate: ValidateFunction

/**
 * Validate good and bad typings against the Ajv schema validator.
 */
class AjvSchemaValidationTest : FunSpec({
    beforeSpec {
        withClue("catalogDir should be a non-empty directory") {
            exists(catalogDir).shouldBeTrue()
            stat(catalogDir).isDirectory().shouldBeTrue()
            opendir(catalogDir).read().await().shouldNotBeNull()
        }

        validate = Ajv(AjvOptions(strict = true)).compile(
            JSON.parse(readFile(schemaFile, utf8))
        )
    }

    if (existsSync(catalogDir)) {
        withData(
            nameFn = { "catalog typing: $it" },
            readdirSync(catalogDir).asSequence()
        ) {
            it.shouldBeValid(dataDir = catalogDir)
        }
    }

    if (existsSync(externalDir)) {
        withData(
            nameFn = { "external typing: $it" },
            readdirSync(externalDir).asSequence()
        ) {
            it.shouldBeValid(dataDir = externalDir)
        }
    }

    withData(
        nameFn = { "valid typing: $it" },
        readdirSync(goodDir).asSequence()
    ) {
        it.shouldBeValid()
    }

    withData(
        nameFn = { "invalid typing: $it" },
        readdirSync(badDir).asSequence()
    ) {
        it.shouldNotBeValid()
    }
})

private fun beValid(): Matcher<String> {
    return Matcher { data ->
        MatcherResult(
            validate(yaml.parse(data)),
            { "schema validation failed:\n${JSON.stringify(validate.errors, null, 4)}" },
            { "should have failed schema validation but passed" },
        )
    }
}

private suspend fun String.shouldBeValid(dataDir: String = goodDir): String {
    readFile(path.join(dataDir, this), utf8) should beValid()
    return this
}

private suspend fun String.shouldNotBeValid(): String {
    readFile(path.join(badDir, this), utf8) shouldNot beValid()
    return this
}
