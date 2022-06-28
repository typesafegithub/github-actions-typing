package it.krzeminski.githubactionstyping.parsing

import com.charleskorn.kaml.Yaml
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString

@Serializable
data class TypesManifest(
    val inputs: Map<String, ApiItem> = emptyMap(),
    val outputs: Map<String, ApiItem> = emptyMap(),
)

@Serializable
data class ApiItem(
    val type: String? = null,
    val allowedValues: List<String>? = null,
    val separator: String? = null,
    val namedValues: Map<String, Int>? = null,
    val listItem: ApiItem? = null,
)

private val myYaml = Yaml(
    configuration = Yaml.default.configuration.copy(
        strictMode = false,
    )
)

fun parseTypesManifest(manifestString: String): TypesManifest =
    myYaml.decodeFromString(manifestString)
