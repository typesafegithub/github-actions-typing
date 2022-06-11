plugins {
    kotlin("js") version "1.7.0"
}

repositories {
    mavenCentral()
}

kotlin {
    js {
        nodejs()
    }
}
