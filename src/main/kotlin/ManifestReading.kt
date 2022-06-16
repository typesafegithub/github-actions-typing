import java.io.File

fun readActionManifest(): String? =
    listOf("yaml", "yml")
        .map { "action.$it" }
        .firstOrNull { File(it).exists() }
        ?.let { File(it).readText() }
