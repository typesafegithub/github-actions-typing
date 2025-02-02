package it.krzeminski.githubactionstyping.parsing

import com.charleskorn.kaml.AnchorsAndAliases
import com.charleskorn.kaml.EmptyYamlDocumentException
import com.charleskorn.kaml.Yaml
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString

@Serializable
data class TypesManifest(
    val inputs: Map<String, ApiItem>? = null,
    val outputs: Map<String, ApiItem>? = null,
)

@Serializable
data class ApiItem(
    val type: String? = null,
    val name: String? = null,
    @SerialName("allowed-values")
    val allowedValues: List<String>? = null,
    val separator: String? = null,
    @SerialName("named-values")
    val namedValues: Map<String, String>? = null,
    @SerialName("list-item")
    val listItem: ApiItem? = null,
)

private val myYaml = Yaml(
    configuration = Yaml.default.configuration.copy(
        strictMode = false,
        anchorsAndAliases = AnchorsAndAliases.Permitted(),
    )
)

fun parseTypesManifest(manifestString: String): TypesManifest =
    runCatching {
        myYaml.decodeFromString<TypesManifest>(manifestString)
    }.getOrElse {
        if (it is EmptyYamlDocumentException) {
            return TypesManifest()
        }
        throw it
    }
