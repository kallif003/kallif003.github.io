import * as React from "react"
import { render } from "@testing-library/react"
import { H1Head, H2Head } from "./Typography"

describe("Typography", () => {
	it("renders H1Head properly", () => {
		const { container } = render(<H1Head>Test</H1Head>)

		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders H2Head properly", () => {
		const { container } = render(<H2Head>Test</H2Head>)

		expect(container.firstChild).toMatchSnapshot()
	})
})
