import React from "react"
import type { NextPage } from "next"
import { Subtittle, Body2 } from "../Typography"
import { Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiAlphaCCircleOutline } from "@mdi/js"
import { mdiLinkedin } from "@mdi/js"
import { mdiGithub } from "@mdi/js"

const FooterMobile: NextPage = () => {
	return (
		<footer className="bg-bg">
			<h1
				className="text-2xl text-white font-bold font-['sans'] text-center pt-5"
				data-testid="logo-mobile">
				K.A.A
			</h1>

			<Subtittle
				className="text-yellow pt-5 pb-5"
				style={{ textAlign: "center" }}
				data-testid="start-mobile">
				Inicio
			</Subtittle>

			<Ancora href="" className="text-white" data-testid="btnMobileSobreMim">
				<Body2 className="pb-5 " style={{ textAlign: "center" }}>
					Sobre mim
				</Body2>
			</Ancora>

			<Ancora href="" className="text-white" data-testid="btnMobileProjetos">
				<Body2 className="pb-5 " style={{ textAlign: "center" }}>
					Projetos
				</Body2>
			</Ancora>

			<Subtittle
				className="text-yellow pb-5"
				style={{ textAlign: "center" }}
				data-testid="contact-mobile">
				Contate-me
			</Subtittle>

			<Ancora
				href="mailto:kallifabrahao@gmail.com"
				className="text-white"
				data-testid="btnMobileEmail">
				<Body2 className="pb-5 " style={{ textAlign: "center" }}>
					Email
				</Body2>
			</Ancora>

			<Ancora
				href="https://api.whatsapp.com/send?1=pt_BR&phone=5512991116524"
				className="text-white"
				data-testid="btnMobileWhatsapp">
				<Body2 className="pb-5 " style={{ textAlign: "center" }}>
					Whatsapp
				</Body2>
			</Ancora>

			<Subtittle
				className="text-yellow pb-5"
				style={{ textAlign: "center" }}
				data-testid="social-mobile">
				Social
			</Subtittle>

			<div className="flex items-center space-x-2 justify-center pb-5">
				<a
					href="https://www.linkedin.com/in/kallifabrahao/"
					target="_blank"
					rel="noreferrer"
					data-testid="btnMobileLinkedin">
					<Icon
						path={mdiLinkedin}
						title="User Profile"
						size="25px"
						color="#fff"
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
						color="#fff"
					/>
				</a>
			</div>

			<hr className="border-bordes w-[80%] mx-auto " />

			<div className="flex items-center mt-3 pb-5 justify-center">
				<Icon
					path={mdiAlphaCCircleOutline}
					title="User Profile"
					size="10px"
					color="#fff"
				/>
				<Body2 className="text-white pl-2 text-sm" data-testid="footer-mobile">
					2022 K.A.A
				</Body2>
			</div>
		</footer>
	)
}

export default FooterMobile
