package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import it.krzeminski.githubactionstyping.reporting.booleanStatusToText
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
            val manifest = repoRoot.readYamlFile("action") ?:
            return@map Pair(false, "Shouldn't happen - the file was already found by the action, and now is gone! Please report this issue to the action owners.")
            val typesManifest = repoRoot.readYamlFile("action-types") ?:
            return@map Pair(false, "No types manifest (action-types.yml or action-types.yaml) found!")
            manifestsToReport(manifestPath = repoRoot.relativize(manifestPath), manifest, typesManifest)
        }
        .toList()
    val overallResult = validationResultsForActions.all { it.first }
    return Pair(
        overallResult,
        buildString {
            appendLine("Overall result:")
            appendLine(booleanStatusToText(overallResult))
            appendLine()
            append(validationResultsForActions.joinToString("\n") { it.second })
        }
    )
}
