import React from "react"
// import type { NextPage } from "next"
import { Button1, Ul, Li, Ancora } from "../Buttons"
import HeaderMobile from "./HeaderMobile"
import { Container, HeaderH1, Hidden, HeaderUl, HeaderNav } from "./styles"

const Header = (data: any) => {
	return (
		<header className={Container}>
			<h1 className={`${HeaderH1} ${Hidden}`} data-testid="text">
				K.A.A
			</h1>

			<HeaderMobile
				homeMobile={data.home}
				projectMobile={data.project}
				aboutMeMobile={data.aboutMe}
				blog={data.blog}
			/>

			<nav className={HeaderNav} data-cy="div-anchor">
				<Ul className={HeaderUl} data-cy="nav">
					<Li className={Hidden}>
						<Ancora
							href={data.home}
							data-testid="btnHome"
							data-cy="cy-home"
							id="a1">
							Home
						</Ancora>
					</Li>
					<Li className={Hidden}>
						<Ancora
							href={data.project}
							data-testid="project"
							data-cy="cy-project">
							Projetos
						</Ancora>
					</Li>
					<Li className={Hidden}>
						<Ancora
							href={data.aboutMe}
							data-testid="about-me"
							data-cy="cy-aboutMe">
							Sobre
						</Ancora>
					</Li>
					<Li className={Hidden}>
						<Ancora href={data.blog} data-cy="cy-aboutMe">
							Blog
						</Ancora>
					</Li>
				</Ul>
			</nav>

			<a
				href="https://api.whatsapp.com/send?l=pt_pt&phone=5512991116524"
				target="_blank"
				data-testid="contact-me"
				data-cy="cy-contact-me"
				rel="noreferrer"
				className="mr-5">
				<Button1 className={Hidden}>Contate-me</Button1>
			</a>
		</header>
	)
}

export default Header
