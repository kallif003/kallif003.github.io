import { render, fireEvent, screen } from "@testing-library/react"
import React from "react"
import Footer from "../Footer/Footer"

describe("Footer", () => {
	test("whatsapp button", () => {
		render(<Footer />)
		const btnWhatsapp = screen.getByTestId("btnWhatsapp")
		fireEvent.click(btnWhatsapp)
	})
	test("About me button", () => {
		render(<Footer />)
		const btnAboutMe = screen.getByTestId("btnAboutMe")
		fireEvent.click(btnAboutMe)
	})
	test("projects button", () => {
		render(<Footer />)
		const btnProject = screen.getByTestId("btnProject")
		fireEvent.click(btnProject)
	})
	test("Email button", () => {
		render(<Footer />)
		const btnEmail = screen.getByTestId("btnEmail")
		fireEvent.click(btnEmail)
	})
	test("Linkedin button", () => {
		render(<Footer />)
		const btnLinkedin = screen.getByTestId("btnLinkedin")
		fireEvent.click(btnLinkedin)
	})
	test("GitHub button", () => {
		render(<Footer />)
		const btnGitHub = screen.getByTestId("btnGitHub")
		fireEvent.click(btnGitHub)
	})
	it("Renders a logo", () => {
		render(<Footer />)
		const logo = screen.getByTestId("logo")
		expect(logo.innerHTML).toEqual("K.A.A")
	})
	it("Renders a options", () => {
		render(<Footer />)
		const start = screen.getByTestId("start")
		expect(start.innerHTML).toEqual("Inicio")
	})
	it("Renders a options", () => {
		render(<Footer />)
		const contact = screen.getByTestId("contact")
		expect(contact.innerHTML).toEqual("Contate-me")
	})
	it("Renders a options", () => {
		render(<Footer />)
		const social = screen.getByTestId("social")
		expect(social.innerHTML).toEqual("Social")
	})
	it("Renders a options", () => {
		render(<Footer />)
		const footer = screen.getByTestId("footer")
		expect(footer.innerHTML).toEqual("2022 K.A.A")
	})
})
