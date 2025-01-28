package it.krzeminski.githubactionstyping

import io.kotest.core.spec.style.FunSpec
import io.kotest.datatest.withData
import io.kotest.matchers.shouldBe
import io.kotest.mpp.sysprop
import java.io.File

private val schemaFile = File(sysprop("schemaFile")!!)
private val goodDir = File(sysprop("goodDir")!!)
private val badDir = File(sysprop("badDir")!!)

/**
 * Make sure all test typings have a pragma line pointing to the local schema.
 */
class EnsurePragmaTest : FunSpec({
    withData(
        nameFn = { "${it.parentFile.name}/${it.name} should start with schema pragma line" },
        sequenceOf(goodDir, badDir).flatMap {
            it.listFiles()!!.asSequence()
        }
    ) {
        if (it.readText().isNotBlank()) {
            it.useLines { lines ->
                lines.first() shouldBe "# yaml-language-server: \$schema=${schemaFile.relativeTo(badDir).invariantSeparatorsPath}"
            }
        }
    }
})
