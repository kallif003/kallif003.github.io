import React from "react"
import type { NextPage } from "next"
import { Button1, Ul, Li, Ancora } from "../Buttons"
import HeaderMobile from "./HeaderMobile"
import { Container, HeaderH1, Hidden, HeaderUl, HeaderNav } from "./styles"

const Header: NextPage = () => {
	return (
		<header className={Container}>
			<h1 className={`${HeaderH1} ${Hidden}`} data-testid="text">
				K.A.A
			</h1>

			<HeaderMobile />

			<nav className={HeaderNav} data-cy="div-anchor">
				<Ul className={HeaderUl} data-cy="nav">
					<Li className={Hidden}>
						<Ancora href="#home" data-testid="btnHome" data-cy="cy-home">
							Home
						</Ancora>
					</Li>
					<Li className={Hidden}>
						<Ancora href="#projetos" data-testid="project" data-cy="cy-project">
							Projetos
						</Ancora>
					</Li>
					<Li className={Hidden}>
						<Ancora href="#aboutMe" data-testid="about-me" data-cy="cy-aboutMe">
							Sobre
						</Ancora>
					</Li>
				</Ul>
			</nav>
			<Button1 className={Hidden}>
				<a
					href="https://api.whatsapp.com/send?l=pt_pt&phone=5512991116524"
					target="_blank"
					data-testid="contact-me"
					data-cy="cy-contact-me"
					rel="noreferrer">
					Contate-me
				</a>
			</Button1>
		</header>
	)
}

export default Header
