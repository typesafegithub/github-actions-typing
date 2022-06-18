import io.kotest.core.spec.style.FunSpec
import io.kotest.matchers.shouldBe

class YamlValidationTest : FunSpec({
    test("possible typings") {
        (1 + 1) shouldBe 2
    }
})
