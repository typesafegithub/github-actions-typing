fun main() {
    println("Action's manifest:")
    val manifest = readActionManifest()
    println(manifest)

    if (manifest == null) {
        return
    }

    val parsedManifest = parseManifest(manifest)
    println("========================")
    println(parsedManifest)
}
