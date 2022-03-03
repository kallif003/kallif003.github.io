import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import HeaderMobile from "./HeaderMobile"

describe("Header", () => {
	it("Renders a logo", () => {
		render(<HeaderMobile />)
		const text = screen.getByTestId("mobile-text")
		expect(text.innerHTML).toEqual("K.A.A")
	})

	it("teste button ancoras", () => {
		render(<HeaderMobile />)

		const button = screen.getByTestId("mobile-contact-me")
		userEvent.click(button)
	})

	it("teste button ancoras", () => {
		render(<HeaderMobile />)

		const button = screen.getByTestId("mobile-about-me")
		userEvent.click(button)
	})
	it("teste button ancoras", () => {
		render(<HeaderMobile />)

		const button = screen.getByTestId("mobile-project")
		userEvent.click(button)
	})
	it("teste button ancoras", () => {
		render(<HeaderMobile />)

		const button = screen.getByTestId("mobile-home")
		userEvent.click(button)
	})
})
