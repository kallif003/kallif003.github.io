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
	}

	return (
		<div className="md:hidden lg:hidden xl:hidden">
			<div
				className="text-white flex justify-between w-full px-5 md:hidden lg:hidden xl:hidden"
				onClick={troca}>
				<h1
					className="text-white font-bold mt-2 font-['sans']"
					data-testid="mobile-text"
					data-cy="cy-mobile-text">
					K.A.A
				</h1>
				<Icon
					path={mdiMenu}
					size="35px"
					className={active ? "block " : "hidden"}
					data-cy="cy-hamburguer-menu"
				/>
				<Icon
					path={mdiClose}
					size="35px"
					className={active ? "hidden " : "block"}
					data-cy="cy-close-menu"
				/>
			</div>

			<div className={active ? "hidden" : "w-screeb h-screen"} onClick={troca}>
				<ul className="text-white pl-2">
					<Li className="py-4">
						<Ancora
							href="#home"
							data-testid="mobile-home"
							data-cy="cy-mobile-home">
							Home
						</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora
							href="#projetos"
							data-testid="mobile-project"
							data-cy="cy-mobile-project">
							Projetos
						</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora
							href="#aboutMe"
							data-testid="mobile-about-me"
							data-cy="cy-mobile-aboutMe">
							Sobre
						</Ancora>
					</Li>
					<Li className="py-4">
						<Ancora
							href="https://api.whatsapp.com/send?l=pt_pt&phone=5512991116524"
							target="_blank"
							data-testid="mobile-contact-me"
							data-cy="cy-mobile-contact-me">
							Contate-me
						</Ancora>
					</Li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderMobile
