const soma = require("../src/pages/soma")

test("somando dois valores de entrada", () => {
	expect(soma(1, 2)).toBe(3)
	expect(soma(2, 3)).toBe(5)
})
