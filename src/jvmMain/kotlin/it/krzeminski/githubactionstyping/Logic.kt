package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import java.nio.file.Path
import kotlin.io.path.exists

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
    val manifestAndPath: Pair<String, Path>? = repoRoot.readYamlFile("action")
    val typesManifestAndPath: Pair<String, Path>? = repoRoot.readYamlFile("action-types")

    return manifestsToReport(
        manifestAndPath = manifestAndPath?.let { Pair(it.first, repoRoot.relativize(it.second)) },
        typesManifest = typesManifestAndPath?.first,
    )
}
