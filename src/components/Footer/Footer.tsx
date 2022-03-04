import React from "react"
import type { NextPage } from "next"
import { Subtittle, Body2 } from "../Typography"
import { Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiAlphaCCircleOutline } from "@mdi/js"
import { mdiLinkedin } from "@mdi/js"
import { mdiGithub } from "@mdi/js"
import FooterMobile from "./FooterMobile"
import {
	Container,
	FooterDiv1,
	FooterH1,
	FooterDiv2,
	FooterDiv3,
	FooterDiv4,
	Hr,
	FlexItemCenter,
	FooterDiv5,
	FooterIcon,
	Text,
} from "./styles"

const Footer: NextPage = () => {
	return (
		<div>
			<footer className={Container} data-cy="footer">
				<div className={`${FooterDiv1} ${FlexItemCenter}`}>
					<h1 className={FooterH1} data-testid="logo">
						K.A.A
					</h1>
					<Subtittle data-testid="start">Inicio</Subtittle>
					<Subtittle data-testid="contact">Contate-me</Subtittle>
					<Subtittle data-testid="social">Social</Subtittle>
				</div>

				<div className={FooterDiv2} data-cy="anchor-footer">
					<div>
						<Ancora href="#aboutMe" data-testid="btnSobreMim">
							<Body2 className="pl-8 pb-6">Sobre mim</Body2>
						</Ancora>

						<Ancora href="#projetos" data-testid="btnProjetos">
							<Body2 className="pl-8">Projetos</Body2>
						</Ancora>
					</div>

					<div className="pl-14">
						<Ancora
							href="mailto:kallifabrahao@gmail.com"
							data-testid="btnEmail"
							data-cy="footer-email">
							<Body2 className="pb-6">Email</Body2>
						</Ancora>

						<Ancora
							href="https://api.whatsapp.com/send?1=pt_BR&phone=5512991116524"
							target="_blank"
							rel="noreferrer"
							data-testid="btnWhatsapp"
							data-cy="footer-contact-me">
							<Body2>Whatsapp</Body2>
						</Ancora>
					</div>

					<div className={`${FooterDiv3} ${FlexItemCenter}`}>
						<a
							href="https://www.linkedin.com/in/kallifabrahao/"
							target="_blank"
							rel="noreferrer"
							data-testid="btnLinkedin"
							data-cy="footer-linkedin">
							<Icon path={mdiLinkedin} title="User Profile" size="25px" />
						</a>
						<a
							href="https://github.com/kallif003"
							target="_blank"
							rel="noreferrer"
							data-testid="btnGitHub"
							data-cy="footer-gitHub">
							<Icon path={mdiGithub} title="User Profile" size="25px" />
						</a>
					</div>
				</div>

				<div className={FooterDiv4}>
					<hr className={Hr} />
					<div className={`${FooterDiv5} ${FlexItemCenter}`}>
						<Icon
							path={mdiAlphaCCircleOutline}
							title="User Profile"
							size="10px"
							className={FooterIcon}
						/>
						<Body2 className={Text} data-testid="footer">
							2022 K.A.A
						</Body2>
					</div>
				</div>
			</footer>

			<FooterMobile />
		</div>
	)
}

export default Footer
