package it.krzeminski.githubactionstyping

import io.kotest.common.sysprop
import io.kotest.core.spec.style.FunSpec
import io.kotest.datatest.withData
import io.kotest.matchers.file.shouldBeADirectory
import io.kotest.matchers.file.shouldNotBeEmptyDirectory
import java.io.File

private val catalogDir = File(sysprop("catalogDir")!!)
private val externalDir = File(sysprop("externalDir")!!)
private val goodDir = File(sysprop("goodDir")!!)
private val badDir = File(sysprop("badDir")!!)

abstract class UseCaseTest : FunSpec({
    beforeSpec {
        catalogDir.shouldBeADirectory()
        catalogDir.shouldNotBeEmptyDirectory()
    }
}) {
    init {
        context("catalog typings") {
            withData(
                nameFn = { it.name },
                ts = catalogDir.listFiles()!!.asSequence(),
                test = { testValid(it) },
            )
        }

        if (externalDir.isDirectory) {
            context("external typings") {
                withData(
                    nameFn = { it.name },
                    ts = externalDir.listFiles()!!.asSequence(),
                    test = { testValid(it) },
                )
            }
        }

        context("valid typings") {
            withData(
                nameFn = { it.name },
                ts = goodDir.listFiles()!!.asSequence(),
                test = { testValid(it) },
            )
        }

        context("invalid typings") {
            withData(
                nameFn = { it.name },
                ts = badDir.listFiles()!!.asSequence(),
                test = { testInvalid(it) },
            )
        }
    }

    abstract suspend fun testValid(typing: File)

    abstract suspend fun testInvalid(typing: File)
}
