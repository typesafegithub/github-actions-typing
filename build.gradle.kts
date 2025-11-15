import org.gradle.api.tasks.PathSensitivity.NAME_ONLY
import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsEnvSpec
import org.jetbrains.kotlin.gradle.targets.js.yarn.YarnRootEnvSpec

plugins {
    kotlin("multiplatform") version "2.2.21"
    kotlin("plugin.serialization") version "2.2.21"
    id("io.kotest") version "6.0.4"
    id("com.google.devtools.ksp") version "2.3.2"
    distribution
}

val collectCatalogTypings by tasks.registering(Sync::class) {
    from("../github-actions-typing-catalog/typings")
    include("**/action-types.yml")
    into(layout.buildDirectory.dir("catalog-typings"))
    eachFile {
        relativePath = RelativePath(
            relativePath.isFile,
            relativePath
                .segments
                .joinToString("_")
                .replace("_action-types", "")
        )
    }
    includeEmptyDirs = false
}

val collectExternalTypings by tasks.registering(Sync::class) {
    mapOf(
        "abhirajputnikku7_android-emulator-runner_main.yml" to "abhirajputnikku7/android-emulator-runner/refs/heads/main/action-types.yml",
        "achrinza_setup-db2_main.yaml" to "achrinza/setup-db2/refs/heads/main/action-types.yaml",
        "Adapta-Innovation_android-emulator-runner_main.yml" to "Adapta-Innovation/android-emulator-runner/refs/heads/main/action-types.yml",
        "andy-57blocks_android-emulator-runner_main.yml" to "andy-57blocks/android-emulator-runner/refs/heads/main/action-types.yml",
        "ArmyEITaaS_wretry.action_master.yml" to "ArmyEITaaS/wretry.action/refs/heads/master/action-types.yml",
        "axel-op_googlejavaformat-action_master.yml" to "axel-op/googlejavaformat-action/refs/heads/master/action-types.yml",
        "benchmark-action_github-action-benchmark_master.yml" to "benchmark-action/github-action-benchmark/refs/heads/master/action-types.yml",
        "burrunan_gradle-cache-action_main.yml" to "burrunan/gradle-cache-action/refs/heads/main/action-types.yml",
        "c2corg_browserslist-update-action_main.yml" to "c2corg/browserslist-update-action/refs/heads/main/action-types.yml",
        "c2corg_transifex-pull-request-action_master.yml" to "c2corg/transifex-pull-request-action/refs/heads/master/action-types.yml",
        "CrypteGuy_cryptesetup-wsl_master.yml" to "CrypteGuy/cryptesetup-wsl/refs/heads/master/action-types.yml",
        // work-around for https://github.com/Datagon-AI-GmbH/splunk-github-action/pull/1
        //"Datagon-AI-GmbH_splunk-github-action_main.yml" to "Datagon-AI-GmbH/splunk-github-action/refs/heads/main/action-types.yml",
        "egym_android-emulator-runner_main.yml" to "egym/android-emulator-runner/refs/heads/main/action-types.yml",
        "embrace-io_android-emulator-runner_main.yml" to "embrace-io/android-emulator-runner/refs/heads/main/action-types.yml",
        "entrostat_git-secret-action_main.yml" to "entrostat/git-secret-action/refs/heads/main/action-types.yml",
        "ericcornelissen_git-tag-annotation-action_main.yml" to "ericcornelissen/git-tag-annotation-action/refs/heads/main/action-types.yml",
        "fwilhe2_setup-kotlin_main.yml" to "fwilhe2/setup-kotlin/refs/heads/main/action-types.yml",
        "guesty-actions_mongodb-github-action_main.yml" to "guesty-actions/mongodb-github-action/refs/heads/main/action-types.yml",
        "Hawthorne001_github-action-benchmark_master.yml" to "Hawthorne001/github-action-benchmark/refs/heads/master/action-types.yml",
        "inloco_android-emulator-runner_main.yml" to "inloco/android-emulator-runner/refs/heads/main/action-types.yml",
        "Jtwo-23_googlejavaformat-action_master.yml" to "Jtwo-23/googlejavaformat-action/refs/heads/master/action-types.yml",
        "lang1122_mongodb-github-action_main.yml" to "lang1122/mongodb-github-action/refs/heads/main/action-types.yml",
        "madhead_check-gradle-version_main.yml" to "madhead/check-gradle-version/refs/heads/main/action-types.yml",
        "madhead_read-java-properties_master.yml" to "madhead/read-java-properties/refs/heads/master/action-types.yml",
        "madhead_semver-utils_main.yml" to "madhead/semver-utils/refs/heads/main/action-types.yml",
        "medicode_dismiss_if_stale_main.yml" to "medicode/dismiss_if_stale/refs/heads/main/action-types.yml",
        "mi-kas_kover-report_main.yml" to "mi-kas/kover-report/refs/heads/main/action-types.yml",
        "nexus-actions_create-nexus-staging-repo_main.yml" to "nexus-actions/create-nexus-staging-repo/refs/heads/main/action-types.yml",
        "nexus-actions_drop-nexus-staging-repo_main.yml" to "nexus-actions/drop-nexus-staging-repo/refs/heads/main/action-types.yml",
        "nexus-actions_release-nexus-staging-repo_main.yml" to "nexus-actions/release-nexus-staging-repo/refs/heads/main/action-types.yml",
        "nicholaslythall_xccov-report_main.yml" to "nicholaslythall/xccov-report/refs/heads/main/action-types.yml",
        "pbrisbin_setup-tool-action_main.yml" to "pbrisbin/setup-tool-action/refs/heads/main/action-types.yml",
        "Ramhubi_android-emulator-runner_main.yml" to "Ramhubi/android-emulator-runner/refs/heads/main/action-types.yml",
        "ReactiveCircus_android-emulator-runner_main.yml" to "ReactiveCircus/android-emulator-runner/refs/heads/main/action-types.yml",
        "sounlida_setup-wsl_master.yml" to "sounlida/setup-wsl/refs/heads/master/action-types.yml",
        "step-security_mongodb-github-action_main.yml" to "step-security/mongodb-github-action/refs/heads/main/action-types.yml",
        "step-security_semver-utils_main.yml" to "step-security/semver-utils/refs/heads/main/action-types.yml",
        "supercharge_mongodb-github-action_main.yml" to "supercharge/mongodb-github-action/refs/heads/main/action-types.yml",
        "techcloud0-actions_android-emulator-runner_main.yml" to "techcloud0-actions/android-emulator-runner/refs/heads/main/action-types.yml",
        "tecolicom_actions-use-homebrew-tools_main.yml" to "tecolicom/actions-use-homebrew-tools/refs/heads/main/action-types.yml",
        "telia-actions_android-emulator-runner_main.yml" to "telia-actions/android-emulator-runner/refs/heads/main/action-types.yml",
        "telia-actions_kover-report_main.yml" to "telia-actions/kover-report/refs/heads/main/action-types.yml",
        "telia-actions_semver-utils_main.yml" to "telia-actions/semver-utils/refs/heads/main/action-types.yml",
        "Tritura_mongodb-github-action_main.yml" to "Tritura/mongodb-github-action/refs/heads/main/action-types.yml",
        "typesafegithub_github-actions-typing_main.yml" to "typesafegithub/github-actions-typing/refs/heads/main/action-types.yml",
        "typesafegithub_github-actions-typing_v1.yml" to "typesafegithub/github-actions-typing/refs/heads/v1/action-types.yml",
        "Unity-for-manufacturing-assets-of-Unity_mongodb-github-action_main.yml" to "Unity-for-manufacturing-assets-of-Unity/mongodb-github-action/refs/heads/main/action-types.yml",
        "Vampire_setup-wsl_master.yml" to "Vampire/setup-wsl/refs/heads/master/action-types.yml",
        "Vampire_setup-wsl_v4.yml" to "Vampire/setup-wsl/refs/heads/v4/action-types.yml",
        "vk-gh-actions-forks_android-emulator-runner_main.yml" to "vk-gh-actions-forks/android-emulator-runner/refs/heads/main/action-types.yml",
        "Wandalen_wretry.action_master.yml" to "Wandalen/wretry.action/refs/heads/master/action-types.yml",
        "zendesk_android-emulator-runner_main.yml" to "zendesk/android-emulator-runner/refs/heads/main/action-types.yml",
        "zendesk_googlejavaformat-action_master.yml" to "zendesk/googlejavaformat-action/refs/heads/master/action-types.yml",
    ).forEach { (name, location) ->
        from(resources.text.fromUri("https://raw.githubusercontent.com/$location")) {
            rename { name }
        }
    }
    into(layout.buildDirectory.dir("external-typings"))
}

val schemaFile = file("github-actions-typing.schema.json")
val goodDir = file("src/test/resources/good-typings")
val badDir = file("src/test/resources/bad-typings")

kotlin {
    jvmToolchain(21)
    jvm {
        mainRun {
            mainClass = "it.krzeminski.githubactionstyping.MainKt"
        }

        val test by testRuns.existing {
            executionTask {
                useJUnitPlatform()
                configureInputsForSchemaTest()
                systemProperty("schemaFile", schemaFile.absolutePath)
                systemProperty("catalogDir", collectCatalogTypings.get().destinationDir.absolutePath)
                systemProperty("externalDir", collectExternalTypings.get().destinationDir.absolutePath)
                systemProperty("goodDir", goodDir.absolutePath)
                systemProperty("badDir", badDir.absolutePath)
            }
        }
    }

    js {
        useEsModules()
        nodejs {
            testTask {
                configureInputsForSchemaTest()
                environment("schemaFile", schemaFile.absolutePath)
                environment("catalogDir", collectCatalogTypings.get().destinationDir.absolutePath)
                environment("externalDir", collectExternalTypings.get().destinationDir.absolutePath)
                environment("goodDir", goodDir.absolutePath)
                environment("badDir", badDir.absolutePath)
            }
        }
    }

    sourceSets {
        jvmMain {
            dependencies {
                implementation("com.charleskorn.kaml:kaml:0.103.0")
                implementation("it.krzeminski:snakeyaml-engine-kmp:4.0.1")
            }
        }

        jvmTest {
            dependencies {
                runtimeOnly("org.junit.platform:junit-platform-launcher")
                implementation(dependencies.platform("io.kotest:kotest-bom:6.0.4"))
                runtimeOnly("io.kotest:kotest-runner-junit5")
                implementation("io.kotest:kotest-framework-engine")
                implementation("io.kotest:kotest-assertions-core")
                implementation("io.kotest:kotest-common")

                implementation("it.krzeminski:snakeyaml-engine-kmp:4.0.1")
                implementation("io.github.optimumcode:json-schema-validator:0.5.3")
            }
        }

        jsTest {
            dependencies {
                implementation(dependencies.platform("io.kotest:kotest-bom:6.0.4"))
                implementation("io.kotest:kotest-framework-engine")
                implementation("io.kotest:kotest-assertions-core")

                implementation(kotlinWrappers.js)
                implementation(kotlinWrappers.node)
                implementation(kotlinWrappers.ajv)
                implementation(kotlinWrappers.yaml)
                implementation(kotlinWrappers.prantlf.jsonlint)
            }
        }
    }
}

// disable the KMP plugin adding custom repositories which is bad practice
// and promotes supply chain attacks
// instead we define the repositories ourselves in the settings script
configure<NodeJsEnvSpec> {
    version.set("20.18.1")
    downloadBaseUrl.set(provider { null })
}

configure<YarnRootEnvSpec> {
    downloadBaseUrl.set(provider { null })
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

fun AbstractTestTask.configureInputsForSchemaTest() {
    inputs
        .file(schemaFile)
        .withPropertyName("schemaFile")
        .normalizeLineEndings()
        .withPathSensitivity(NAME_ONLY)

    inputs
        .files(collectCatalogTypings)
        .withPropertyName("catalogDir")
        .normalizeLineEndings()
        .withPathSensitivity(NAME_ONLY)

    inputs
        .files(collectExternalTypings)
        .withPropertyName("externalDir")
        .normalizeLineEndings()
        .withPathSensitivity(NAME_ONLY)

    inputs
        .dir(goodDir)
        .withPropertyName("goodDir")
        .normalizeLineEndings()
        .withPathSensitivity(NAME_ONLY)

    inputs
        .dir(badDir)
        .withPropertyName("badDir")
        .normalizeLineEndings()
        .withPathSensitivity(NAME_ONLY)
}
