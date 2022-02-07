import * as React from "react"
import { render } from "@testing-library/react"
import { HeroSection, Container, Imagem } from "../HeroSection/HeroSection"
import img from "../../../assets/Image/sistema-delivery.png"

describe("Hero Section Components", () => {
	it("renders HeroSection properly", () => {
		const { container } = render(<HeroSection>Teste</HeroSection>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Container properly", () => {
		const { container } = render(<Container>Teste</Container>)
		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Image properly", () => {
		render(<Imagem src={img} alt="Sistema Delivery" />)
	})
})
