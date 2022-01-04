import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "./"
// o que seu index faz?

// o index faz:
//     renderiza um Hello World
//     renderiza uma mensagem de boas vindas

describe("Home", () => {
	it("Renders a hello world", () => {
		render(<Home />)
		screen.getByText("Hello world!")
	})

	it("Renders a welcome message", () => {
		render(<Home />)
		screen.getByText("Bem vindo ao site do Kallif")
	})

	it("Increments the counter when clicking the button", () => {
		render(<Home />)

		const button = screen.getByText("Count +")

		userEvent.click(button)

		screen.getByText("Count is 1")

		userEvent.click(button)
		userEvent.click(button)
		userEvent.click(button)

		screen.getByText("Count is 4")
	})

	it("button calls onclick", () => {
		const onClick = jest.fn()

		render(<button onClick={onClick}>My Button</button>)

		userEvent.click(screen.getByText("My Button"))
		userEvent.click(screen.getByText("My Button"))
		userEvent.click(screen.getByText("My Button"))
		userEvent.click(screen.getByText("My Button"))

		expect(onClick).toHaveBeenCalledTimes(4)
	})
})
