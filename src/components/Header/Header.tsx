import React from "react"
import type { NextPage } from "next"
import { Button1 } from "../Buttons"

const Header: NextPage = () => {
	return (
		<header className="bg-bg w-screen px-4 py-5 flex justify-around sm:justify-end fixed">
			<h1 className="sm:hidden md:text-2xl lg:text-2xl xl:text-2xl text-white font-bold mt-2 font-['sans']">
				K.A.A
			</h1>
			<ul className="grid grid-flow-col gap-x-2 text-white font-['sans'] sm:hidden md:space-x-10 lg:space-x-12 xl:space-x-12 flex items-center">
				<li className=" w-16  pl-3 rounded-lg">
					<a
						href="https://tailwindcss.com/docs/display"
						className="no-underline hover:underline decoration-golden underline-offset-8 ">
						Home
					</a>
				</li>
				<li className="w-20 pl-3.5 rounded-lg">
					<a
						href="https://tailwindcss.com/docs/display"
						className="no-underline hover:underline decoration-golden underline-offset-8">
						Projetos
					</a>
				</li>
				<li className="w-16 pl-3.5 rounded-lg">
					<a
						href="#sobre"
						className="no-underline hover:underline decoration-golden underline-offset-8">
						Sobre
					</a>
				</li>
			</ul>

			<Button1>
				<a href="mailto:kallifabrahao@gmail.com">Contate-me</a>
			</Button1>
		</header>
	)
}

export default Header
