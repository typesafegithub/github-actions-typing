plugins {
    kotlin("jvm") version "1.8.22"
    kotlin("plugin.serialization") version "1.8.22"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.charleskorn.kaml:kaml:0.54.0")

    testImplementation(platform("io.kotest:kotest-bom:5.6.2"))
    testImplementation("io.kotest:kotest-runner-junit5")
    testImplementation("io.kotest:kotest-assertions-core")
}

tasks.jar {
    manifest.attributes["Main-Class"] = "MainKt"
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
