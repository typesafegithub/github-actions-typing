package it.krzeminski.githubactionstyping.parsing

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString

@Serializable
data class Manifest(
    val inputs: Map<String, Unit> = emptyMap(),
    val outputs: Map<String, Unit> = emptyMap(),
)

private val myYaml = Yaml(
    configuration = Yaml.default.configuration.copy(
        strictMode = false,
    )
)

fun parseManifest(manifestString: String): Manifest =
    myYaml.decodeFromString(manifestString)
