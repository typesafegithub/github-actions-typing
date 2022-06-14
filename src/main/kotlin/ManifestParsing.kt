import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import net.mamoe.yamlkt.Yaml

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

fun parseManifest(manifestString: String): Manifest =
    Yaml.decodeFromString(manifestString)
