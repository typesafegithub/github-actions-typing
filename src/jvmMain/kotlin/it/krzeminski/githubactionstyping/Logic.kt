package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import it.krzeminski.githubactionstyping.reporting.appendStatus
import it.krzeminski.githubactionstyping.validation.ItemValidationResult
import java.nio.file.Path
import kotlin.io.path.exists
import kotlin.io.path.name
import kotlin.io.path.walk

/**
 * Runs validation for a given action, with its manifest files present in the current directory.
 *
 * @param repoRoot: Allows customizing which path should be taken as repo root for action(-types).y(a)ml file discovery.
 *
 * @return a pair where:
 * - the boolean means if the typings are valid
 * - the string is a printable report, with details about all inputs and outputs
 */
fun validateTypings(repoRoot: Path = Path.of(".")): Pair<Boolean, String> {
    require(repoRoot.exists()) { "The given repo root leads to non-existent dir: $repoRoot" }

    val validationResultsForActions = repoRoot.walk()
        .sorted()
        .filter { it.name in setOf("action.yml", "action.yaml") }
        .map { manifestPath ->
            val manifest = repoRoot.readYamlFile("action")
            val typesManifest = repoRoot.readYamlFile("action-types")
            manifestsToReport(
                manifestAndPath = manifest?.let { Pair(it, repoRoot.relativize(manifestPath)) },
                typesManifest = typesManifest,
            )
        }
        .toList()
    val overallResult = validationResultsForActions.all { it.first }
    return Pair(
        overallResult,
        buildString {
            appendLine("Overall result:")
            val validationResult = when (overallResult) {
                true -> ItemValidationResult.Valid
                false -> ItemValidationResult.Invalid(message = null)
            }
            validationResult.appendStatus(this)
            appendLine()
            append(validationResultsForActions.joinToString("\n") { it.second })
        }
    )
}
