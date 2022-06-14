external fun require(module: String): dynamic

val fs = require("fs")

fun readActionManifest(): String? =
    listOf("yaml", "yml")
        .map { "action.$it" }
        .firstOrNull { fileExists(it) }
        ?.let { readTextFileAsUtf8(it) }

private fun fileExists(path: String): Boolean =
    fs.existsSync(path) as Boolean

private fun readTextFileAsUtf8(path: String): String =
    fs.readFileSync(path, "utf8") as String
