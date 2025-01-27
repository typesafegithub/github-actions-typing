plugins {
    kotlin("multiplatform") version "2.1.10"
    kotlin("plugin.serialization") version "2.1.10"
    id("io.kotest.multiplatform") version "6.0.0.M1"
    distribution
}



kotlin {
    jvmToolchain(21)
    jvm {
        mainRun {
            mainClass = "it.krzeminski.githubactionstyping.MainKt"
        }

        val test by testRuns.existing {
            executionTask {
                useJUnitPlatform()
            }
        }
    }

    sourceSets {
        jvmMain {
            dependencies {
                implementation("com.charleskorn.kaml:kaml:0.67.0")
            }
        }

        jvmTest {
            dependencies {
                runtimeOnly("org.junit.platform:junit-platform-launcher")
                implementation(dependencies.platform("io.kotest:kotest-bom:5.9.1"))
                runtimeOnly("io.kotest:kotest-runner-junit5")
                implementation("io.kotest:kotest-framework-api")
                implementation("io.kotest:kotest-assertions-core")
            }
        }
    }
}

distributions {
    main {
        contents {
            into("lib") {
                val jvmJar by tasks.existing
                from(jvmJar)
                val jvmRuntimeClasspath by configurations
                from(jvmRuntimeClasspath)
            }
        }
    }
}
