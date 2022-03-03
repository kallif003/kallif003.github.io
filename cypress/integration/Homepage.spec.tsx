// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

export default describe("Portifólio", () => {
	const getCount = () => cy.get("body").find("h1")

	it("Access the website", () => {
		cy.visit("/")
	})
	it("look for the logo", () => {
		getCount().should("contain", "K.A.A")
	})
	it("Check the number of elements in the nav tag", () => {
		cy.get("[data-cy=nav").children().should("have.length", 3)
	})
	it("testing the anchors", () => {
		cy.get("[data-cy=div-anchor]").within(() => {
			cy.get('a[href*="home"]').click()
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/#home")
			})
			cy.get('a[href*="projetos"]').click()
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/#projetos")
			})
			cy.get('a[href*="aboutMe"]').click()
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/#aboutMe")
			})
		})
	})
	it("Check if the button redirects to whatsapp", () => {
		cy.get("[data-cy=cy-contact-me").click()
	})
	it("Check if the Cv download button works ", () => {
		cy.get("[data-cy=cy-downloadCv]").click()
		cy.readFile("cypress/downloads/Kallif Abrahão.pdf").should("exist")
	})
	it("checking welcome text", () => {
		cy.get("[data-cy=div-boas-vindas]").within(() => {
			cy.get("h1").should("contain", "Seja muito bem vindo")
			cy.get("p").should(
				"contain",
				"Esse é o meu portifólio, ele foi criado com muito carinho para que você possa conhecer mais sobre mim e minhas habilidades. Sinta-se a vontade!"
			)
		})
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
			expect(loc.href).to.eq("http://localhost:3000/#home")
		})
	})
	it("testing the projects button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-project]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/#projetos")
		})
	})
	it("testing the about me button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-aboutMe]").click()
		cy.location().should((loc) => {
			expect(loc.href).to.eq("http://localhost:3000/#aboutMe")
		})
	})
	it("testing the contact me button in the sidebar ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=cy-hamburguer-menu]").click()
		cy.get("[data-cy=cy-mobile-contact-me]").click()
	})
	it("testing the div about me ", () => {
		cy.get("[data-cy=div-aboutMe]").within(() => {
			cy.get("p")
			cy.get("h2")
			cy.get("button")
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
		})
	})
	it("checking title and subtitles ", () => {
		cy.contains("KALLIF ABRAHÃO")
		cy.contains("Developer Front-End")
		cy.contains("Minhas Habilidades")
		cy.contains("Meus projetos")
	})
	it("testing the div my skills ", () => {
		cy.get("[data-cy=div-minhas-habilidades]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h3").contains("Javascript")
			cy.get("h3").contains("React/Next")
			cy.get("h3").contains("React Native")
			cy.get("p")
		})
	})
	it("testing the red hero section", () => {
		cy.get("[data-cy=red-heroSection]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h1").should("contain", "Portifólio")
			cy.get("p").should(
				"contain",
				"Site desenvolvido com Next, Type e Tailwind"
			)
			cy.get("div")
				.parents("[data-cy=red-heroSection]")
				.should("have.css", "background-color", "rgb(194, 39, 58)")
		})
	})
	it("testing the purple hero section", () => {
		cy.get("[data-cy=purple-heroSection]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h1").should("contain", "App. Listando")
			cy.get("p").should(
				"contain",
				"Desenvolvido para criar listas de afazeres"
			)
			cy.get("div")
				.parents("[data-cy=purple-heroSection]")
				.should("have.css", "background-color", "rgb(144, 0, 255)")
		})
	})
	it("testing the yellow hero section", () => {
		cy.get("[data-cy=yellow-heroSection]").within(() => {
			cy.get("img", { includeShadowDom: true })
				.filter("[src]")
				.filter(":visible")
			cy.get("h1").should("contain", "Delivery")
			cy.get("p").should("contain", "Sistema desktop para pizzarias")
			cy.get("div")
				.parents("[data-cy=yellow-heroSection]")
				.should("have.css", "background-color", "rgb(239, 183, 43)")
		})
	})
	it("testing the background color ", () => {
		cy.get("body").should("have.css", "background-color", "rgb(23, 23, 24)")
	})
	it("testing the footer", () => {
		cy.get("[data-cy=footer]").within(() => {
			cy.get("h1").should("contain", "K.A.A")
			cy.get("h2").should("contain", "Inicio")
			cy.get("h2").should("contain", "Contate-me")
			cy.get("h2").should("contain", "Social")
			cy.get("p").should("contain", "Sobre mim")
			cy.get("p").should("contain", "Projetos")
			cy.get("p").should("contain", "Email")
			cy.get("p").should("contain", "Whatsapp")
			cy.get("p").should("contain", "2022 K.A.A")
			cy.get("hr")
		})
	})
	it("testing footer anchors ", () => {
		cy.get("[data-cy=footer-contact-me").click()
		cy.get("[data-cy=footer-linkedin").click()
		cy.get("[data-cy=footer-gitHub").click()
		cy.get("[data-cy=anchor-footer]").within(() => {
			cy.get('a[href*="projetos"]').click()
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/#projetos")
			})
			cy.get('a[href*="aboutMe"]').click()
			cy.location().should((loc) => {
				expect(loc.href).to.eq("http://localhost:3000/#aboutMe")
			})
		})
	})
	it("testing footer responsiveness ", () => {
		cy.viewport(400, 680)
		cy.get("[data-cy=footer-mobile]").should("be.visible")
	})
})
