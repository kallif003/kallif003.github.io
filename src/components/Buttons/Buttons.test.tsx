import * as React from "react"
import { render } from "@testing-library/react"

import {
	Button1,
	Button2,
	Button3,
	Button4,
	Button5,
	Button6,
	Button7,
	Button8,
} from "."

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
	it("renders Button5 properly", () => {
		const { container } = render(<Button5>Teste</Button5>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Button6 properly", () => {
		const { container } = render(<Button6>Teste</Button6>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Button7 properly", () => {
		const { container } = render(<Button7>Teste</Button7>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Button8 properly", () => {
		const { container } = render(<Button8>Teste</Button8>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
