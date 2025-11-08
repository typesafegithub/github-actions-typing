import org.gradle.api.initialization.resolve.RepositoriesMode.FAIL_ON_PROJECT_REPOS

plugins {
    id("org.gradle.toolchains.foojay-resolver-convention") version ("1.0.0")
}

dependencyResolutionManagement {
    repositoriesMode = FAIL_ON_PROJECT_REPOS

    repositories {
        ivy("https://nodejs.org/dist/") {
            name = "Node.js Distributions"
            patternLayout {
                artifact("v[revision]/[artifact](-v[revision]-[classifier]).[ext]")
            }
            metadataSources {
                artifact()
            }
            content {
                includeModule("org.nodejs", "node")
            }
        }
        ivy("https://github.com/yarnpkg/yarn/releases/download/") {
            name = "Yarn Distributions"
            patternLayout {
                artifact("v[revision]/[artifact](-v[revision]).[ext]")
            }
            metadataSources {
                artifact()
            }
            content {
                includeModule("com.yarnpkg", "yarn")
            }
        }
        mavenCentral()
    }

    versionCatalogs {
        val kotlinWrappers by registering {
            from("org.jetbrains.kotlin-wrappers:kotlin-wrappers-catalog:2025.11.4")
        }
    }
}

rootProject.name = "github-actions-typing"
