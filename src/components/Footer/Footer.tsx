import React from "react"
import type { NextPage } from "next"
import { Subtittle, Body2 } from "../Typography"
import { Ancora } from "../Buttons"
import Icon from "@mdi/react"
import { mdiAlphaCCircleOutline } from "@mdi/js"
import { mdiLinkedin } from "@mdi/js"
import { mdiGithub } from "@mdi/js"
import FooterMobile from "./FooterMobile"

const Footer: NextPage = () => {
	return (
		<footer className="grid grid-rows-3 ">
			<div className="sm:hidden col-span-4 flex md:gap-32 lg:gap-52 xl:gap-52 pl-20 items-center bg-bg">
				<h1
					className="text-2xl text-white font-bold font-['sans']"
					data-testid="logo">
					K.A.A
				</h1>
				<Subtittle className="text-yellow" data-testid="start">
					Inicio
				</Subtittle>
				<Subtittle className="text-yellow" data-testid="contact">
					Contate-me
				</Subtittle>
				<Subtittle className="text-yellow" data-testid="social">
					Social
				</Subtittle>
			</div>

			<div className=" sm:hidden col-span-4 lg:gap-32 md:gap-12 xl:gap-32 bg-bg flex md:pl-[240px] pl-80">
				<div>
					<Ancora href="" className="text-white" data-testid="btnSobreMim">
						<Body2 className="pl-8 pb-6">Sobre mim</Body2>
					</Ancora>

					<Ancora href="" className="text-white" data-testid="btnProjetos">
						<Body2 className="pl-8">Projetos</Body2>
					</Ancora>
				</div>

				<div className="text-white pl-14">
					<Ancora href="mailto:kallifabrahao@gmail.com" data-testid="btnEmail">
						<Body2 className="pb-6">Email</Body2>
					</Ancora>

					<Ancora
						href="https://api.whatsapp.com/send?1=pt_BR&phone=5512991116524"
						target="_blank"
						rel="noreferrer"
						data-testid="btnWhatsapp">
						<Body2>Whatsapp</Body2>
					</Ancora>
				</div>

				<div className="pl-24">
					<div className="flex items-center space-x-2">
						<a
							href="https://www.linkedin.com/in/kallifabrahao/"
							target="_blank"
							rel="noreferrer"
							data-testid="btnLinkedin">
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
							data-testid="btnGitHub">
							<Icon
								path={mdiGithub}
								title="User Profile"
								size="25px"
								color="#fff"
							/>
						</a>
					</div>
				</div>
			</div>

			<div className=" sm:hidden col-span-4 bg-bg ">
				<hr className="border-bordes w-[90%] mt-8 ml-20" />
				<div className="flex items-center mt-3 pb-5">
					<Icon
						path={mdiAlphaCCircleOutline}
						title="User Profile"
						size="10px"
						color="#fff"
						className="ml-20"
					/>
					<Body2 className="text-white pl-2 text-sm" data-testid="footer">
						2022 K.A.A
					</Body2>
				</div>
			</div>

			<div className="xl:hidden lg:hidden md:hidden">
				<FooterMobile />
			</div>
		</footer>
	)
}

export default Footer
