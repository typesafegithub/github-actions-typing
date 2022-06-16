plugins {
    kotlin("jvm") version "1.7.0"
    kotlin("plugin.serialization") version "1.7.0"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.charleskorn.kaml:kaml:0.45.0")
}

tasks.jar {
    manifest.attributes["Main-Class"] = "MainKt"
}
