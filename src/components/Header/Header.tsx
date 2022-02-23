import React from "react"
import type { NextPage } from "next"
import { Button1, Ul, Li, Ancora } from "../Buttons"
import HeaderMobile from "./HeaderMobile"

const Header: NextPage = () => {
	return (
		<header className="bg-bg w-screen px-4 sm:px-0 py-5 md:flex justify-around lg:flex justify-around xl:flex justify-around fixed z-10 ">
			<h1
				className="sm:hidden text-white font-bold mt-2 font-['sans']"
				data-testid="text">
				K.A.A
			</h1>

			<HeaderMobile />

			<nav className="self-center ml-8">
				<Ul className="md:space-x-10 lg:space-x-12 xl:space-x-20">
					<Li className="sm:hidden ">
						<Ancora href="#home" data-testid="btnHome">
							Home
						</Ancora>
					</Li>
					<Li className="sm:hidden ">
						<Ancora href="#projetos" data-testid="project">
							Projetos
						</Ancora>
					</Li>
					<Li className="sm:hidden ">
						<Ancora href="#aboutMe" data-testid="about-me">
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
					rel="noreferrer">
					Contate-me
				</a>
			</Button1>
		</header>
	)
}

export default Header
