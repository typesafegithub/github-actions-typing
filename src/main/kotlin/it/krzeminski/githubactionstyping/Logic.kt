package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile
import java.nio.file.Path

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
    val manifest = repoRoot.readYamlFile("action") ?:
        return Pair(false, "No action manifest (action.yml or action.yaml) found!")

    val typesManifest = repoRoot.readYamlFile("action-types") ?:
    return Pair(false, "No types manifest (action-types.yml or action-types.yaml) found!")

    return manifestsToReport(manifest, typesManifest)
}
