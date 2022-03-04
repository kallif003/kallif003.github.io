import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("Header", () => {
	it("Renders a logo", () => {
		render(<Header />)
		const text = screen.getByTestId("text")
		expect(text.innerHTML).toEqual("K.A.A")
	})
	it("test anchor button ", () => {
		render(<Header />)

		const button = screen.getByTestId("contact-me")
		userEvent.click(button)
	})

	it("test anchor button ", () => {
		render(<Header />)

		const button = screen.getByTestId("about-me")
		userEvent.click(button)
	})
	it("test anchor button ", () => {
		render(<Header />)

		const button = screen.getByTestId("project")
		userEvent.click(button)
	})
	it("test anchor button ", () => {
		render(<Header />)

		const button = screen.getByTestId("btnHome")
		userEvent.click(button)
	})
})
