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
		const btnSobreMim = screen.getByTestId("btnSobreMim")
		fireEvent.click(btnSobreMim)
	})
	test("projects button", () => {
		render(<Footer />)
		const btnProjetos = screen.getByTestId("btnProjetos")
		fireEvent.click(btnProjetos)
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
})
