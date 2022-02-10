import * as React from "react"
import { render } from "@testing-library/react"
import {
	ContainerCards,
	Cards,
	WorkTools,
	AreaAboutMe,
	AreaTextAboutMe,
} from "."

describe("Cards Components", () => {
	it("renders Container properly", () => {
		const { container } = render(<ContainerCards>Teste</ContainerCards>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Cards properly", () => {
		const { container } = render(<Cards>Teste</Cards>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders WorkTools properly", () => {
		const { container } = render(<WorkTools>Teste</WorkTools>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders AreaAboutMe properly", () => {
		const { container } = render(<AreaAboutMe>Teste</AreaAboutMe>)
		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders AreaTextAboutMe properly", () => {
		const { container } = render(<AreaTextAboutMe>Teste</AreaTextAboutMe>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
