package it.krzeminski.githubactionstyping.validation

import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe
import it.krzeminski.githubactionstyping.parsing.ApiItem
import it.krzeminski.githubactionstyping.parsing.Manifest

class ManifestValidationTest : FunSpec({
    test("no typing spec set") {
        // given
        val manifest = Manifest(
            typingSpec = null,
            inputs = emptyMap(),
            outputs = emptyMap(),
        )

        // when
        val result = manifest.validate()

        // then
        result shouldBe ActionValidationResult(
            overallResult = ItemValidationResult.Invalid(
                "Set top-level 'typingSpec' attribute to 'krzema12/github-actions-typing@v0.1', was: null"
            ),
            inputs = emptyMap(),
            outputs = emptyMap(),
        )
    }

    test("incorrect typing spec set") {
        // given
        val manifest = Manifest(
            typingSpec = "incorrect-typing-spec",
            inputs = emptyMap(),
            outputs = emptyMap(),
        )

        // when
        val result = manifest.validate()

        // then
        result shouldBe ActionValidationResult(
            overallResult = ItemValidationResult.Invalid(
                "Set top-level 'typingSpec' attribute to 'krzema12/github-actions-typing@v0.1', " +
                    "was: 'incorrect-typing-spec'"
            ),
            inputs = emptyMap(),
            outputs = emptyMap(),
        )
    }

    test("input and output without type") {
        // given
        val manifest = Manifest(
            typingSpec = expectedTypingSpec,
            inputs = mapOf(
                "some-input" to ApiItem(type = null),
            ),
            outputs = mapOf(
                "some-output" to ApiItem(type = null),
            ),
        )

        // when
        val result = manifest.validate()

        // then
        result shouldBe ActionValidationResult(
            overallResult = ItemValidationResult.Invalid("Some typing is invalid."),
            inputs = mapOf(
                "some-input" to ItemValidationResult.Invalid(
                    message = "Type must be specified. Use 'type' attribute."
                ),
            ),
            outputs = mapOf(
                "some-output" to ItemValidationResult.Invalid(
                    message = "Type must be specified. Use 'type' attribute."
                ),
            ),
        )
    }
})
