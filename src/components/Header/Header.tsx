import React from "react"
import type { NextPage } from "next"
import { Button1, Ul, Li, Ancora } from "../Buttons"
import HeaderMobile from "./HeaderMobile"
import { HeaderStyles, HeaderH1 } from "./tailwind"

const Header: NextPage = () => {
	return (
		<header className={HeaderStyles}>
			<h1 className={HeaderH1} data-testid="text">
				K.A.A
			</h1>

			<HeaderMobile />

			<nav className="self-center ml-8" data-cy="div-anchor">
				<Ul className="md:space-x-10 lg:space-x-12 xl:space-x-20" data-cy="nav">
					<Li className="sm:hidden ">
						<Ancora href="#home" data-testid="btnHome" data-cy="cy-home">
							Home
						</Ancora>
					</Li>
					<Li className="sm:hidden ">
						<Ancora href="#projetos" data-testid="project" data-cy="cy-project">
							Projetos
						</Ancora>
					</Li>
					<Li className="sm:hidden">
						<Ancora href="#aboutMe" data-testid="about-me" data-cy="cy-aboutMe">
							Sobre
						</Ancora>
					</Li>
				</Ul>
			</nav>
			<Button1 className="sm:hidden">
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
