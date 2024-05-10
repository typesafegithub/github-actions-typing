plugins {
    kotlin("jvm") version "1.9.24"
    kotlin("plugin.serialization") version "1.9.21"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.charleskorn.kaml:kaml:0.59.0")

    testImplementation(platform("io.kotest:kotest-bom:5.9.0"))
    testImplementation("io.kotest:kotest-runner-junit5")
    testImplementation("io.kotest:kotest-assertions-core")
}

tasks.jar {
    manifest.attributes["Main-Class"] = "MainKt"
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
