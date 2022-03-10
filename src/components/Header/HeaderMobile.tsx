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
			<div className={`${HiddenInMobile} ${DivMobile}`} onClick={troca}>
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

			<div className={active ? "hidden" : "w-screeb h-screen"} onClick={troca}>
				<ul className={UlMobile}>
					<Li className={LiMobile}>
						<Ancora
							href={data.homeMobile}
							data-testid="mobile-home"
							data-cy="cy-mobile-home">
							Home
						</Ancora>
					</Li>
					<Li className={LiMobile}>
						<Ancora
							href={data.projectMobile}
							data-testid="mobile-project"
							data-cy="cy-mobile-project">
							Projetos
						</Ancora>
					</Li>
					<Li className={LiMobile}>
						<Ancora
							href={data.aboutMeMobile}
							data-testid="mobile-about-me"
							data-cy="cy-mobile-aboutMe">
							Sobre
						</Ancora>
					</Li>
					<Li className={LiMobile}>
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
