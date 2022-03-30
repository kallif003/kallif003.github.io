/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Subtittle, Body2 } from "../Typography"
import { Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiAlphaCCircleOutline } from "@mdi/js"
import { mdiLinkedin } from "@mdi/js"
import { mdiGithub } from "@mdi/js"
import {
	FooterDiv6,
	FooterH1,
	FooterMobileH1,
	FooterSocialMedia,
	FooterSubtitle,
	HiddenInFooter,
	HrMobile,
	TextMobile,
} from "./styles"

const FooterMobile = (data: any) => {
	const [type, setType] = useState(data.aboutMeMobile)

	return (
		<footer className={HiddenInFooter} data-cy="footer-mobile">
			<h1 className={`${FooterH1} ${FooterMobileH1}`} data-testid="logo-mobile">
				K.A.A
			</h1>

			<div className={FooterSubtitle}>
				<Subtittle className="pb-5" data-testid="start-mobile">
					Inicio
				</Subtittle>

				<Ancora
					href={type ? "/AboutMe" : "/HomePage"}
					data-testid="btnMobileSobreMim">
					<Body2 className={TextMobile}>{type ? "Sobre mim" : "Home"}</Body2>
				</Ancora>

				<Ancora href="HomePage#projetos" data-testid="btnMobileProjetos">
					<Body2 className={TextMobile}>Projetos</Body2>
				</Ancora>
			</div>

			<div className={FooterSubtitle}>
				<Subtittle className="pb-5" data-testid="contact-mobile">
					Contate-me
				</Subtittle>

				<Ancora
					href="mailto:kallifabrahao@gmail.com"
					data-testid="btnMobileEmail">
					<Body2 className={TextMobile}>Email</Body2>
				</Ancora>

				<Ancora
					href="https://api.whatsapp.com/send?1=pt_BR&phone=5512991116524"
					data-testid="btnMobileWhatsapp"
					data-cy="footer-contact-me">
					<Body2 className={TextMobile}>Whatsapp</Body2>
				</Ancora>
			</div>

			<Subtittle className={FooterSubtitle} data-testid="social-mobile">
				Social
			</Subtittle>

			<div className={FooterSocialMedia}>
				<a
					href="https://www.linkedin.com/in/kallifabrahao/"
					target="_blank"
					rel="noreferrer"
					data-testid="btnMobileLinkedin">
					<Icon
						path={mdiLinkedin}
						title="User Profile"
						size="25px"
						className="hover:text-yellow active:scale-95"
					/>
				</a>
				<a
					href="https://github.com/kallif003"
					target="_blank"
					rel="noreferrer"
					data-testid="btnMobileGitHub">
					<Icon
						path={mdiGithub}
						title="User Profile"
						size="25px"
						className="hover:text-yellow active:scale-95"
					/>
				</a>
			</div>

			<hr className={HrMobile} />

			<div className={FooterDiv6}>
				<Icon
					path={mdiAlphaCCircleOutline}
					title="User Profile"
					size="10px"
					color="#fff"
				/>
				<Body2 className="pl-2" data-testid="footer-mobile">
					2022 K.A.A
				</Body2>
			</div>
		</footer>
	)
}

export default FooterMobile
