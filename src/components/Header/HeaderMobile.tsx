import React, { useState } from "react"
import type { NextPage } from "next"
import { Li, Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import { mdiClose } from "@mdi/js"

const HeaderMobile: NextPage = () => {
	const [active, setActive] = useState(true)

	const troca = () => {
		setActive(!active)
		console.log(active)
	}
	return (
		<div className="md:hidden lg:hidden xl:hidden">
			<div
				className="text-white flex justify-between w-full px-5 md:hidden lg:hidden xl:hidden"
				onClick={troca}>
				<h1 className="text-white font-bold mt-2 font-['sans']">K.A.A</h1>
				<Icon
					path={mdiMenu}
					size="35px"
					className={active ? "block " : "hidden"}
				/>
				<Icon
					path={mdiClose}
					size="35px"
					className={active ? "hidden " : "block"}
				/>
			</div>

			<div className={active ? "hidden" : "w-screeb h-screen"} onClick={troca}>
				<ul className="text-white pl-2">
					<Li className="py-4">
						<Ancora href="#home">Home</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora href="#projetos">Projetos</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora href="#aboutMe">Sobre</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora href="mailto:kallifabrahao@gmail.com">Contate-me</Ancora>
					</Li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderMobile
