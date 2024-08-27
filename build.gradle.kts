plugins {
    kotlin("jvm") version "2.0.20"
    kotlin("plugin.serialization") version "2.0.10"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.charleskorn.kaml:kaml:0.61.0")

    testImplementation(platform("io.kotest:kotest-bom:5.9.1"))
    testImplementation("io.kotest:kotest-runner-junit5")
    testImplementation("io.kotest:kotest-assertions-core")
}

kotlin {
    jvmToolchain(21)
}

tasks.jar {
    manifest.attributes["Main-Class"] = "MainKt"
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
