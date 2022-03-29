import * as React from "react"
import { render } from "@testing-library/react"
import { HeroSection } from "../HeroSection/HeroSection"

describe("Hero Section Components", () => {
	it("renders HeroSection properly", () => {
		const { container } = render(<HeroSection>Teste</HeroSection>)
		expect(container.firstChild).toMatchSnapshot()
	})
})
