package it.krzeminski.githubactionstyping

import it.krzeminski.githubactionstyping.parsing.readYamlFile

/**
 * Runs validation for a given action, with its manifest files present in the current directory.
 *
 * @return a pair where:
 * - the boolean means if the typings are valid
 * - the string is a printable report, with details about all inputs and outputs
 */
fun validateTypings(): Pair<Boolean, String> {
    val typesManifest = readYamlFile("action-types") ?:
        return Pair(false, "No types manifest (action-types.yml or action-types.yaml) found!")

    val manifest = readYamlFile("action") ?:
        return Pair(false, "No action manifest (action.yml or action.yaml) found!")

    return manifestsToReport(manifest, typesManifest)
}
