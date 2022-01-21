import { render, fireEvent, screen } from "@testing-library/react"
import React from "react"
import FooterMobile from "./FooterMobile"

describe("Footer", () => {
	test("whatsapp button", () => {
		render(<FooterMobile />)
		const btnWhatsapp = screen.getByTestId("btnMobileWhatsapp")
		fireEvent.click(btnWhatsapp)
	})
	test("About me button", () => {
		render(<FooterMobile />)
		const btnSobreMim = screen.getByTestId("btnMobileSobreMim")
		fireEvent.click(btnSobreMim)
	})
	test("projects button", () => {
		render(<FooterMobile />)
		const btnProjetos = screen.getByTestId("btnMobileProjetos")
		fireEvent.click(btnProjetos)
	})
	test("Email button", () => {
		render(<FooterMobile />)
		const btnEmail = screen.getByTestId("btnMobileEmail")
		fireEvent.click(btnEmail)
	})
	test("Linkedin button", () => {
		render(<FooterMobile />)
		const btnLinkedin = screen.getByTestId("btnMobileLinkedin")
		fireEvent.click(btnLinkedin)
	})
	test("GitHub button", () => {
		render(<FooterMobile />)
		const btnGitHub = screen.getByTestId("btnMobileGitHub")
		fireEvent.click(btnGitHub)
	})
})
