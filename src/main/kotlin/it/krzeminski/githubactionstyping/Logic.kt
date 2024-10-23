package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import java.nio.file.Path
import kotlin.io.path.ExperimentalPathApi
import kotlin.io.path.exists
import kotlin.io.path.extension
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
@OptIn(ExperimentalPathApi::class)
fun validateTypings(repoRoot: Path = Path.of(".")): Pair<Boolean, String> {
    require(repoRoot.exists()) { "The given repo root leads to non-existent dir: $repoRoot" }

    return repoRoot.walk()
        .filter { it.name in setOf("action.yml", "action.yaml") }
        .map { pathToManifest ->
            val manifest = repoRoot.readYamlFile("action")
        }
    val manifest = repoRoot.readYamlFile("action") ?:
        return Pair(false, "No action manifest (action.yml or action.yaml) found!")

    val typesManifest = repoRoot.readYamlFile("action-types") ?:
    return Pair(false, "No types manifest (action-types.yml or action-types.yaml) found!")

    return manifestsToReport(manifestPath = Path.of("todo"), manifest, typesManifest)
}
