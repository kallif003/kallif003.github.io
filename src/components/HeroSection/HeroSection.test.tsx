import * as React from "react"
import { render } from "@testing-library/react"
import { HeroSection, Container } from "../HeroSection/HeroSection"

describe("Hero Section Components", () => {
	it("renders HeroSection properly", () => {
		const { container } = render(<HeroSection>Teste</HeroSection>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Container properly", () => {
		const { container } = render(<Container>Teste</Container>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
