import * as React from "react"
import { render, screen } from "@testing-library/react"
import About from "."

describe("About Page", () => {
	it("renders correctly", () => {
		render(<About />)

		expect(screen.getByText("About Me")).toBeTruthy()
	})
})
