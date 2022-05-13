import React, { useState } from "react"

import { Li, Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiMenu } from "@mdi/js"
import { mdiClose } from "@mdi/js"
import {
	HiddenInMobile,
	DivMobile,
	HeaderH1,
	UlMobile,
	LiMobile,
} from "./styles"

const HeaderMobile = (data: any) => {
	const [active, setActive] = useState(true)

	const troca = () => {
		setActive(!active)
	}

	return (
		<div className={HiddenInMobile}>
			<div className={DivMobile} onClick={troca}>
				<h1
					className={HeaderH1}
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

			<nav className={active ? "hidden" : "w-screen h-screen"} onClick={troca}>
				<ul className={UlMobile}>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={data.homeMobile}
							data-testid="mobile-home"
							data-cy="cy-mobile-home"
							id="style-a">
							Home
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={data.projectMobile}
							data-testid="mobile-project"
							data-cy="cy-mobile-project"
							id="style-a">
							Projetos
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href={data.aboutMeMobile}
							data-testid="mobile-about-me"
							data-cy="cy-mobile-aboutMe"
							id="style-a">
							Sobre
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora href={data.blog} data-cy="cy-mobile-aboutMe" id="style-a">
							Blog
						</Ancora>
					</Li>
					<Li className={LiMobile} id="style-li">
						<Ancora
							href="https://api.whatsapp.com/send?l=pt_pt&phone=5512991116524"
							target="_blank"
							data-testid="mobile-contact-me"
							data-cy="cy-mobile-contact-me"
							id="style-a">
							Contate-me
						</Ancora>
					</Li>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMobile
