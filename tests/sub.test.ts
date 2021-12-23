import { sub } from "../src/pages/sub"

describe("Subtração", function () {
	it("subtraindo dois valores de entrada", () => {
		expect(sub()).toBe(5)
	})
})
