import * as React from "react"
import { render } from "@testing-library/react"
import {
	H1Head,
	H2Head,
	H3Head,
	H4Head,
	H5Head,
	Subtittle,
	Subtittle2,
	Body1,
	Body2,
} from "./Typography"

describe("Typography", () => {
	test("renders H1Head properly", () => {
		const { container } = render(<H1Head>Test</H1Head>)

		expect(container.firstChild).toMatchSnapshot()
	})

	it("renders H2Head properly", () => {
		const { container } = render(<H2Head>Test</H2Head>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders H3Head properly", () => {
		const { container } = render(<H3Head>Test</H3Head>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders H4Head properly", () => {
		const { container } = render(<H4Head>Test</H4Head>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders H5Head properly", () => {
		const { container } = render(<H5Head>Test</H5Head>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Subtittle properly", () => {
		const { container } = render(<Subtittle>Test</Subtittle>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Subtittle 2 properly", () => {
		const { container } = render(<Subtittle2>Test</Subtittle2>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Body 1 properly", () => {
		const { container } = render(<Body1>Test</Body1>)

		expect(container.firstChild).toMatchSnapshot()
	})
	it("renders Body 2 properly", () => {
		const { container } = render(<Body2>Test</Body2>)

		expect(container.firstChild).toMatchSnapshot()
	})
})
