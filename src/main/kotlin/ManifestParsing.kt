import com.charleskorn.kaml.Yaml
import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString

@Serializable
data class Manifest(
    val typing: Typing? = null,
    val inputs: Map<String, Input> = emptyMap(),
    val outputs: Map<String, Output> = emptyMap(),
)

@Serializable
data class Typing(
    val specification: String? = null,
    val version: String? = null,
)

@Serializable
data class Input(
    val type: String? = null,
)

@Serializable
data class Output(
    val type: String? = null,
)

private val myYaml = Yaml(
    configuration = Yaml.default.configuration.copy(
        strictMode = false,
    )
)

fun parseManifest(manifestString: String): Manifest =
    myYaml.decodeFromString(manifestString)
