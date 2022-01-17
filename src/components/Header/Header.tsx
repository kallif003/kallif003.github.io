import React from "react"
import type { NextPage } from "next"
import { Button1, Ul, Li, Ancora } from "../Buttons"

const Header: NextPage = () => {
	return (
		<header className="bg-bg w-screen px-4 py-5 flex justify-around sm:justify-end fixed">
			<h1 className="sm:hidden md:text-2xl lg:text-2xl xl:text-2xl text-white font-bold mt-2 font-['sans']">
				K.A.A
			</h1>
			<nav className="self-center">
				<Ul className="md:space-x-10 lg:space-x-12 xl:space-x-20">
					<Li className="sm:hidden ">
						<Ancora>Home</Ancora>
					</Li>
					<Li className="sm:hidden ">
						<Ancora>Projetos</Ancora>
					</Li>
					<Li className="sm:hidden ">
						<Ancora>Sobre</Ancora>
					</Li>
				</Ul>
			</nav>
			<Button1 className="sm:hidden">
				<a href="mailto:kallifabrahao@gmail.com">Contate-me</a>
			</Button1>
		</header>
	)
}

export default Header
