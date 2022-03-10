// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

export default describe("testing About me Page", () => {
	const getCount = () => cy.get("body").find("h1")
	it("Access the About me Page", () => {
		cy.visit("http://localhost:3000/AboutMe")
	})
	it("look for the logo", () => {
		getCount().should("contain", "K.A.A")
	})
	it("Check the number of elements in the nav tag", () => {
		cy.get("[data-cy=nav").children().should("have.length", 3)
	})
	it("testing the div about me ", () => {
		cy.get("[data-cy=div-aboutMe]").within(() => {
			cy.get("p")
			cy.get("h2")

			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
		})
	})
	it("checking title and subtitles ", () => {
		cy.contains("Minhas Habilidades")
		cy.contains("Experiência de Trabalho")
		cy.contains("Ferramentas de Trabalho")
	})
	it("testing the div my skills ", () => {
		cy.get("[data-cy=div-minhas-habilidades]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h3").contains("Javascript")
			cy.get("h3").contains("React/Next")
			cy.get("h3").contains("React Native")
			cy.get("h3").contains("Html/Css")
			cy.get("h3").contains("Jest/Cypress")
			cy.get("h3").contains("Tailwind")
		})
	})
	it("testing the div my work tools ", () => {
		cy.get("[data-cy=div-workTools]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h3").contains("Clickup")
			cy.get("h3").contains("GitHub")
			cy.get("h3").contains("Slack")
		})
	})
	it("testing the home button of the header component", () => {
		cy.get("[data-cy=cy-home]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})
	it("testing the project button of the header component", () => {
		cy.get("[data-cy=cy-project]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage#projetos")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})
	it("testing the home button of the footer component", () => {
		cy.get("[data-cy=cy-footer-home]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})
	it("testing the project button of the footer component", () => {
		cy.get("[data-cy=cy-footer-project]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage#projetos")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})

	it("responsiveness test", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").should("be.visible")
		cy.get("[data-cy=cy-home]").should("not.be.visible")
		cy.get("[data-cy=cy-project]").should("not.be.visible")
		cy.get("[data-cy=cy-aboutMe]").should("not.be.visible")
		cy.get("[data-cy=cy-mobile-contact-me").should("not.be.visible")
		cy.get("[data-cy=cy-mobile-text]").should("be.visible")
		cy.get("[data-cy=cy-close-menu]").should("not.be.visible")
	})
	it("visibility test of buttons in the hamburger menu", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-home]").should("be.visible")
		cy.get("[data-cy=cy-mobile-project]").should("be.visible")
		cy.get("[data-cy=cy-mobile-aboutMe]").should("be.visible")
		cy.get("[data-cy=cy-mobile-contact-me]").should("be.visible")
		cy.get("[data-cy=cy-close-menu]").should("be.visible")
		cy.get("[data-cy=cy-close-menu]").click()
	})
	it("testing the home button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-home]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})
	it("testing the projects button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-project]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/HomePage#projetos")
		})
		cy.visit("http://localhost:3000/AboutMe")
	})

	it("testing the contact me button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-contact-me]").click()
	})
	it("testing the footer", () => {
		cy.get("[data-cy=footer]").within(() => {
			cy.get("h1").should("contain", "K.A.A")
			cy.get("h2").should("contain", "Inicio")
			cy.get("h2").should("contain", "Contate-me")
			cy.get("h2").should("contain", "Social")
			cy.get("p").should("contain", "Home Page")
			cy.get("p").should("contain", "Projetos")
			cy.get("p").should("contain", "Email")
			cy.get("p").should("contain", "Whatsapp")
			cy.get("hr")
			cy.get("p").should("contain", "2022 K.A.A")
		})
	})
	it("testing footer responsiveness ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=footer-mobile]").should("be.visible")
	})
})
