plugins {
    kotlin("jvm") version "1.7.10"
    kotlin("plugin.serialization") version "1.7.10"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.charleskorn.kaml:kaml:0.46.0")

    testImplementation(platform("io.kotest:kotest-bom:5.4.0"))
    testImplementation("io.kotest:kotest-runner-junit5")
    testImplementation("io.kotest:kotest-assertions-core")
}

tasks.jar {
    manifest.attributes["Main-Class"] = "MainKt"
}

tasks.withType<Test>().configureEach {
    useJUnitPlatform()
}
