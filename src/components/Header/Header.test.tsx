import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("Header", () => {
	it("Renders a logo", () => {
		render(<Header />)
		screen.getByText("K.A.A")
	})
	it("teste button ancoras", () => {
		render(<Header />)

		const button = screen.getByText("Contate-me")
		userEvent.click(button)
	})

	it("teste button ancoras", () => {
		render(<Header />)

		const button = screen.getByText("Sobre")
		userEvent.click(button)
	})
	it("teste button ancoras", () => {
		render(<Header />)

		const button = screen.getByText("Projetos")
		userEvent.click(button)
	})
	it("teste button ancoras", () => {
		render(<Header />)

		const button = screen.getByText("Home")
		userEvent.click(button)
	})
})
