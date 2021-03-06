import * as React from "react"
import { render } from "@testing-library/react"

import { Button1, Button2, Button3, Button4, Ul, Li, Ancora } from "."

describe("Buttons", () => {
	it("renders Button1 properly", () => {
		const { container } = render(<Button1>Teste</Button1>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders Button2 properly", () => {
		const { container } = render(<Button2>Teste</Button2>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders Button3 properly", () => {
		const { container } = render(<Button3>Teste</Button3>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Button4 properly", () => {
		const { container } = render(<Button4>Teste</Button4>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Ul properly", () => {
		const { container } = render(<Ul>Teste</Ul>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Li properly", () => {
		const { container } = render(<Li>Teste</Li>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Anchor properly", () => {
		const { container } = render(<Ancora>Teste</Ancora>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
