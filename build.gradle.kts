plugins {
    kotlin("js") version "1.7.0"
    kotlin("plugin.serialization") version "1.7.0"
}

repositories {
    mavenCentral()
}

kotlin {
    js {
        nodejs()
    }
}

dependencies {
    implementation("net.mamoe.yamlkt:yamlkt:0.12.0")
}
