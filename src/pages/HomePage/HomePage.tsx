import React, { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import { Button1, Button2, Button3, Button4 } from "../../components/Buttons"
import img from "../../../assets/Image/sistema-delivery.png"
import foto from "../../../assets/Image/kallif.png"
import imgSite from "../../../assets/Image/site2.png"
import list from "../../../assets/Image/listando1.png"
import list2 from "../../../assets/Image/listando2.png"
import { cv } from "../../../assets/cv"
import Footer from "../../components/Footer/Footer"
import JSPDF from "jspdf"
import Icon from "@mdi/react"
import { mdiDownload } from "@mdi/js"
import { mdiArrowRight } from "@mdi/js"
import Link from "next/link"
import { Body1, H2Head, H3Head } from "../../components/Typography"
import {
	AreaAboutMe,
	ImageAboutMe,
	AreaTextAboutMe,
	ContainerCards,
	Cards,
	Logo,
	CardsMyBlog,
} from "../../components/Cards/Cards"
import { HeroSection, Imagem } from "../../components/HeroSection/HeroSection"

import {
	GradientDiv,
	Subtitle,
	Title,
	ContainerHome,
	WelcomeDiv,
	WelcomeH1,
	DivButtons,
	ItemAlignment,
	WidthAuto,
	TextH3,
	DivHeroSection,
	ButtonMyBlog,
} from "../../components/PageStyles/styles"
import { createClient } from "../../../prismicio"

interface List {
	slug: string
	title: string
	description: string
	image: string
}

function HomePage() {
	const [posts, setPost] = useState<List[]>([])

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const home = await client.getAllByType("my-blog", {
				orderings: [
					{ field: "document.first_publication_date", direction: "desc" },
				],
			})

			const data = home.map((e: any) => ({
				slug: e.uid,
				title: e.data.title,
				description: e.data.description,
				image: e.data.image.url,
			}))
			setPost(data)
		}

		getProps()
	})

	const downloadCV = () => {
		const pdf = new JSPDF("portrait", "mm", "a4")
		pdf.addImage(cv, "PNG", 0, 0, 190, 300)
		pdf.save("Kallif Abrahão.pdf")
	}

	return (
		<div className={ContainerHome}>
			<Header
				home="/"
				project="#projects"
				aboutMe="/AboutMe"
				blog={"/MyBlog"}
			/>

			<div className={GradientDiv}>
				<h1 id="home" className={Title}>
					KALLIF ABRAHÃO
				</h1>
				<h2 className={Subtitle}>Developer Front-End</h2>
			</div>

			<div className="flex flex-col items-center w-auto">
				<div className={WelcomeDiv} data-cy="div-boas-vindas">
					<h1 className={WelcomeH1}>
						Seja <span className="text-yellow ">muito bem vindo</span>
					</h1>
					<p>
						Esse é o meu portifólio, ele foi criado com muito carinho para que
						você possa conhecer mais sobre mim e minhas habilidades.
					</p>
					<p>Sinta-se à vontade!</p>
				</div>
			</div>

			<div className={DivButtons}>
				<Link href="#projects" passHref>
					<Button1 className="text-[18px] mb-5">Ver projetos</Button1>
				</Link>
				<Button3
					className={ItemAlignment}
					onClick={downloadCV}
					data-cy="cy-downloadCv">
					<Icon
						path={mdiDownload}
						title="User Profile"
						size="20px"
						color="#fff"
					/>
					<Body1>Download CV</Body1>
				</Button3>

				<h1 id="aboutMe" />
			</div>

			<AreaAboutMe className={`${WidthAuto} mt-20`} data-cy="div-aboutMe">
				<div className="w-[300px] sm:w-[265px] pt-1">
					<ImageAboutMe
						src={foto}
						alt="Me"
						width={1200}
						height={1600}
						id="imgData"
					/>
				</div>
				<AreaTextAboutMe>
					<H2Head>Sobre Mim </H2Head>
					<Body1>
						Sou formado em análise e desenvolvimento de sistema e sou apaixonado
						por Javascript.
					</Body1>
					<Body1>
						Tenho me aprofundado cada vez mais nesse universo do desenvolvimento
						web e mobile.
					</Body1>
					<Body1>
						Clique no botão abaixo se quiser saber mais sobre as minhas skills!
					</Body1>
					<Link href="/AboutMe" passHref>
						<Button4 className={`${ItemAlignment} mt-16 sm:mt-28 `} id="btn2">
							<Body1>Mais sobre mim</Body1>
							<Icon path={mdiArrowRight} title="User Profile" size="20px" />
						</Button4>
					</Link>
				</AreaTextAboutMe>
			</AreaAboutMe>

			<H3Head className={`${TextH3} sm:my-20 sm:mx-2`}>
				Minhas Habilidades
			</H3Head>

			<ContainerCards className="sm:mt-10 mt-20">
				<Cards className={`${ItemAlignment} flex-col`}>
					<Logo
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIyNC4zMDMwNiIgeDI9Ijg2IiB5Mj0iMTQ3Ljg0MjA2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTFfVjZIU2hJencyMXg3X2dyMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjliNTNhIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmY1OWE4Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyMi40OTA4OCIgeTE9Ijk1Ljg5MjY5IiB4Mj0iMTIyLjQ5MDg4IiB5Mj0iMTM0Ljg4ODMxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTJfVjZIU2hJencyMXg3X2dyMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmNkZWE3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZjOWUyIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjkxLjU5MjY5IiB5MT0iOTUuODkyNjkiIHgyPSI5MS41OTI2OSIgeTI9IjEzNC44ODgzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zX1Y2SFNoSXp3MjF4N19ncjMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZjZGVhNyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYzllMiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgaWQ9IkxheWVyXzEiPjxwYXRoIGQ9Ik0xMzcuMDYyNSwyMS41aC0xMDIuMTI1Yy03LjUyNSwwIC0xMy40Mzc1LDUuOTEyNSAtMTMuNDM3NSwxMy40Mzc1djEwMi4xMjVjMCw3LjUyNSA1LjkxMjUsMTMuNDM3NSAxMy40Mzc1LDEzLjQzNzVoMTAyLjEyNWM3LjUyNSwwIDEzLjQzNzUsLTUuOTEyNSAxMy40Mzc1LC0xMy40Mzc1di0xMDIuMTI1YzAsLTcuNTI1IC01LjkxMjUsLTEzLjQzNzUgLTEzLjQzNzUsLTEzLjQzNzV6TTE0NS4xMjUsMTM3LjA2MjVjMCw0LjU2ODc1IC0zLjQ5Mzc1LDguMDYyNSAtOC4wNjI1LDguMDYyNWgtMTAyLjEyNWMtNC41Njg3NSwwIC04LjA2MjUsLTMuNDkzNzUgLTguMDYyNSwtOC4wNjI1di0xMDIuMTI1YzAsLTQuNTY4NzUgMy40OTM3NSwtOC4wNjI1IDguMDYyNSwtOC4wNjI1aDEwMi4xMjVjNC41Njg3NSwwIDguMDYyNSwzLjQ5Mzc1IDguMDYyNSw4LjA2MjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTFfVjZIU2hJencyMXg3X2dyMSkiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjUwNjI1LDExMS41MzEyNWwtMi4xNSwtMC44MDYyNWMtMy43NjI1LC0xLjYxMjUgLTUuMzc1LC0yLjY4NzUgLTUuMzc1LC01LjM3NWMwLC0yLjE1IDEuNjEyNSwtMy43NjI1IDQuMDMxMjUsLTMuNzYyNWMyLjE1LDAgMy40OTM3NSwwLjgwNjI1IDQuODM3NSwyLjY4NzVjMC4yNjg3NSwwLjUzNzUgMS4wNzUsMC44MDYyNSAxLjg4MTI1LDAuMjY4NzVsNC41Njg3NSwtMi45NTYyNWMwLjUzNzUsLTAuMjY4NzUgMC44MDYyNSwtMS4zNDM3NSAwLjUzNzUsLTEuODgxMjVjLTIuNjg3NSwtNC4wMzEyNSAtNi40NSwtNS42NDM3NSAtMTEuNTU2MjUsLTUuNjQzNzVjLTcuNzkzNzUsMCAtMTIuNjMxMjUsNC44Mzc1IC0xMi42MzEyNSwxMS4yODc1YzAsNi45ODc1IDQuMDMxMjUsMTAuNDgxMjUgMTAuNDgxMjUsMTIuOWwyLjE1LDAuODA2MjVjNC4wMzEyNSwxLjYxMjUgNS45MTI1LDIuNjg3NSA1LjkxMjUsNS42NDM3NWMwLDIuNDE4NzUgLTEuODgxMjUsNC4zIC01LjM3NSw0LjNjLTMuNzYyNSwwIC01LjY0Mzc1LC0yLjE1IC03LjUyNSwtNC44Mzc1Yy0wLjUzNzUsLTAuNTM3NSAtMS4zNDM3NSwtMC44MDYyNSAtMS44ODEyNSwtMC4yNjg3NWwtNC41Njg3NSwyLjk1NjI1Yy0wLjUzNzUsMC4yNjg3NSAtMC44MDYyNSwxLjA3NSAtMC41Mzc1LDEuODgxMjVjMi42ODc1LDQuNTY4NzUgNi45ODc1LDguMDYyNSAxNC41MTI1LDguMDYyNWM4LjMzMTI1LDAgMTQuMjQzNzUsLTQuMyAxNC4yNDM3NSwtMTIuMDkzNzVjMCwtNi45ODc1IC00LjAzMTI1LC0xMC4yMTI1IC0xMS41NTYyNSwtMTMuMTY4NzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfVjZIU2hJencyMXg3X2dyMikiPjwvcGF0aD48cGF0aCBkPSJNMTAzLjQ2ODc1LDk0LjA2MjVoLTYuMTgxMjVjLTAuODA2MjUsMCAtMS4zNDM3NSwwLjUzNzUgLTEuMzQzNzUsMS4zNDM3NXYyNy4xNDM3NWMwLDQuMyAtMS42MTI1LDUuMzc1IC00LjU2ODc1LDUuMzc1Yy0yLjQxODc1LDAgLTQuMywtMS4zNDM3NSAtNS42NDM3NSwtMy4yMjVjLTAuMjY4NzUsLTAuNTM3NSAtMS4wNzUsLTAuODA2MjUgLTEuODgxMjUsLTAuMjY4NzVsLTQuODM3NSwyLjk1NjI1Yy0wLjUzNzUsMC4yNjg3NSAtMC44MDYyNSwxLjM0Mzc1IC0wLjUzNzUsMS44ODEyNWMyLjQxODc1LDQuMDMxMjUgNi45ODc1LDcuNzkzNzUgMTMuNDM3NSw3Ljc5Mzc1YzcuNzkzNzUsMCAxMi45LC00LjAzMTI1IDEyLjksLTEzLjE2ODc1di0yOC40ODc1YzAsLTAuODA2MjUgLTAuNTM3NSwtMS4zNDM3NSAtMS4zNDM3NSwtMS4zNDM3NXoiIGZpbGw9InVybCgjY29sb3ItM19WNkhTaEl6dzIxeDdfZ3IzKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
						alt="Js"
						width={70}
						height={72}
					/>
					<H3Head>Javascript</H3Head>
				</Cards>
				<Cards className={`${ItemAlignment} flex-col`}>
					<Logo
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSI2Ny43NTk5NCIgeDI9Ijg2IiB5Mj0iOTguNjkwMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMV90NFliRWJBODM0dUhfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmY2RlYTciPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM5ZTIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxOS45NTczOCIgeDI9Ijg2IiB5Mj0iMTQzLjYyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTJfdDRZYkViQTgzNHVIX2dyMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjliNTNhIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmY1OWE4Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiB0cmFuc2Zvcm09InNjYWxlKDIuNjg3NSwyLjY4NzUpIiByPSI2IiBmaWxsPSJ1cmwoI2NvbG9yLTFfdDRZYkViQTgzNHVIX2dyMSkiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0xNTUuODc1LDg2YzAsLTEwLjA5OTYzIC0xMS40MDMwNiwtMTguODU4MTkgLTI5LjE2NzQ0LC0yNC4xNjZjMC41OTM5NCwtMi43NzA4MSAxLjA5MzgxLC01LjQ5NTk0IDEuNDA4MjUsLTguMTAyODFjMS43NjU2OSwtMTQuNzM1NTYgLTEuMjk4MDYsLTI1LjA1NTU2IC04LjYyOTU2LC0yOS4wNTk5NGMtNy4zMzQxOSwtNC4wMDE2OSAtMTcuNjY3NjIsLTAuOTk5NzUgLTI5LjEwODMxLDguNDU0ODhjLTEuNDYyLDEuMjA2NjkgLTIuOTIxMzEsMi41MjA4NyAtNC4zNzc5NCwzLjg5Njg3Yy0xLjQ1NjYzLC0xLjM3ODY5IC0yLjkxNTk0LC0yLjY5MDE5IC00LjM3Nzk0LC0zLjg5Njg3Yy0xMS40NDA2OSwtOS40NTQ2MiAtMjEuNzc5NSwtMTIuNDUzODcgLTI5LjEwODMxLC04LjQ1NDg3Yy03LjMzMTUsNC4wMDE2OSAtMTAuMzk1MjUsMTQuMzIxNjkgLTguNjI5NTYsMjkuMDU5OTRjMC4zMTE3NSwyLjYwOTU2IDAuODE0MzEsNS4zMzIgMS40MDgyNSw4LjEwMjgxYy0xNy43NjQzOCw1LjMwNzgxIC0yOS4xNjc0NCwxNC4wNjYzNyAtMjkuMTY3NDQsMjQuMTY2YzAsMTAuMDk5NjIgMTEuNDAzMDYsMTguODU4MTkgMjkuMTY3NDQsMjQuMTY2Yy0wLjU5Mzk0LDIuNzcwODEgLTEuMDkzODEsNS40OTU5NCAtMS40MDgyNSw4LjEwMjgxYy0xLjc2NTY5LDE0LjczNTU2IDEuMjk4MDYsMjUuMDU1NTYgOC42Mjk1NiwyOS4wNTk5NGMyLjEyMDQ0LDEuMTU4MzEgNC40ODgxMywxLjcyODA2IDcuMDYyNzUsMS43MjgwNmM2LjMzNDQ0LDAgMTMuOTEzMTksLTMuNDU4ODEgMjIuMDQ1NTYsLTEwLjE4MDI1YzEuNDYyLC0xLjIwNjY5IDIuOTIxMzEsLTIuNTIwODggNC4zNzc5NCwtMy44OTY4OGMxLjQ1NjYzLDEuMzc4NjkgMi45MTU5NCwyLjY5MDE5IDQuMzc3OTQsMy44OTY4OGM4LjEzMjM4LDYuNzIxNDQgMTUuNzExMTIsMTAuMTgwMjUgMjIuMDQ1NTYsMTAuMTgwMjVjMi41NzQ2MiwwIDQuOTQ1LC0wLjU3MjQ0IDcuMDYyNzUsLTEuNzI4MDZjNy4zMzE1LC00LjAwMTY5IDEwLjM5NTI1LC0xNC4zMjE2OSA4LjYyOTU2LC0yOS4wNTk5NGMtMC4zMTE3NSwtMi42MDk1NiAtMC44MTQzMSwtNS4zMzIgLTEuNDA4MjUsLTguMTAyODFjMTcuNzY0MzgsLTUuMzA3ODEgMjkuMTY3NDQsLTE0LjA2NjM4IDI5LjE2NzQ0LC0yNC4xNjZ6TTkzLjc5OTEzLDM3LjI2NDg3YzkuNDg2ODcsLTcuODM5NDQgMTcuOTEyMTksLTEwLjcxNTA2IDIzLjEwOTgxLC03Ljg3NzA2YzUuMTk3NjMsMi44MzUzMSA3LjMzNDE5LDExLjQ3NTYzIDUuODY5NSwyMy42OTgzOGMtMC4yODIxOSwyLjM2MjMxIC0wLjczMzY5LDQuODI2NzUgLTEuMjYwNDQsNy4zMzQxOWMtNS42ODk0NCwtMS4zOTQ4MSAtMTEuOTA1NjIsLTIuNDU5MDYgLTE4LjUyMjI1LC0zLjEzMzYzYy00LjIwMzI1LC02LjExNDA2IC04LjY0MDMxLC0xMS42OTMzMSAtMTMuMTkwMjUsLTE2LjQ3OTc1YzEuMzI3NjIsLTEuMjUyMzcgMi42NjA2MiwtMi40NDAyNSAzLjk5MzYzLC0zLjU0MjEyek0xMDcuMjI4NTYsOTcuNTkxMTljLTIuMjkyNDQsNC4xOTc4NyAtNC43Myw4LjIxMDMxIC03LjI2MTYzLDEyLjAyMzg4Yy00LjQzNzA2LDAuMzcwODcgLTkuMDk5ODcsMC41NzI0NCAtMTMuOTY2OTQsMC41NzI0NGMtNC44NjcwNiwwIC05LjUyOTg4LC0wLjIwMTU2IC0xMy45Njk2MywtMC41NzI0NGMtMi41Mjg5NCwtMy44MTYyNSAtNC45NjkxOSwtNy44MjYgLTcuMjYxNjIsLTEyLjAyMzg3Yy0yLjEwNywtMy44NTY1NiAtNC4wMjg1NiwtNy43MzQ2MiAtNS43NTY2MiwtMTEuNTkxMTljMS43MjgwNiwtMy44NTM4OCAzLjY0OTYzLC03LjczMTk0IDUuNzU2NjIsLTExLjU5MTE5YzIuMjkyNDQsLTQuMTk3ODcgNC43MywtOC4yMTAzMSA3LjI2MTYyLC0xMi4wMjM4N2M0LjQzOTc1LC0wLjM3MDg3IDkuMTAyNTYsLTAuNTcyNDQgMTMuOTY5NjMsLTAuNTcyNDRjNC44NjcwNiwwIDkuNTI5ODgsMC4yMDE1NiAxMy45Njk2MywwLjU3MjQ0YzIuNTI4OTQsMy44MTYyNSA0Ljk2OTE5LDcuODI2IDcuMjYxNjIsMTIuMDIzODdjMi4xMDcsMy44NTY1NiA0LjAyODU2LDcuNzM0NjMgNS43NTY2MywxMS41OTExOWMtMS43MjgwNiwzLjg1Mzg3IC0zLjY1MjMxLDcuNzMxOTQgLTUuNzU5MzEsMTEuNTkxMTl6TTExNS43NzIxMyw5Mi42ODM4MWMxLjgyNzUsNC42NzM1NiAzLjMyNzEzLDkuMjU1NzUgNC41MDQyNSwxMy42OTU1Yy00LjE0OTUsMS4wMTA1IC04LjYyNjg3LDEuODY1MTMgLTEzLjQ2MTY5LDIuNDk2NjljMS43NjU2OSwtMi44MjE4NyAzLjQ5Mzc1LC01LjcwODI1IDUuMTMwNDQsLTguNzEwMTljMS4zNjI1NiwtMi40ODU5NCAyLjYyMDMxLC00Ljk4NTMxIDMuODI3LC03LjQ4MnpNODYsMTI3LjM5NTU2Yy0zLjQxODUsLTMuNjAzOTQgLTYuNzc3ODcsLTcuNjk0MzEgLTEwLjAyMTY5LC0xMi4xMjg2OWMzLjI2OCwwLjE5MDgxIDYuNjA4NTYsMC4yOTU2MyAxMC4wMjE2OSwwLjI5NTYzYzMuNDEzMTIsMCA2Ljc1MzY5LC0wLjEwNDgxIDEwLjAyMTY5LC0wLjI5NTYzYy0zLjI0MzgxLDQuNDM0MzggLTYuNjAzMTksOC41MjQ3NSAtMTAuMDIxNjksMTIuMTI4Njl6TTY1LjE4MjYzLDEwOC44NzZjLTQuODM0ODEsLTAuNjMxNTYgLTkuMzEyMTksLTEuNDg2MTkgLTEzLjQ2MTY5LC0yLjQ5NjY5YzEuMTc3MTIsLTQuNDM5NzUgMi42NzY3NSwtOS4wMjQ2MiA0LjUwNDI1LC0xMy42OTU1YzEuMjA5MzgsMi40OTkzOCAyLjQ2NzEzLDQuOTk2MDYgMy44MjQzMSw3LjQ4NDY5YzEuNjM5MzgsMi45OTkyNSAzLjM2NzQ0LDUuODg1NjMgNS4xMzMxMyw4LjcwNzV6TTU2LjIyNzg4LDc5LjMxNjE5Yy0xLjgyNzUsLTQuNjczNTYgLTMuMzI3MTMsLTkuMjU4NDQgLTQuNTA0MjUsLTEzLjY5NTVjNC4xNDk1LC0xLjAxMDUgOC42MjY4OCwtMS44NjUxMiAxMy40NjE2OSwtMi40OTY2OWMtMS43NjU2OSwyLjgyMTg4IC0zLjQ5Mzc1LDUuNzA4MjUgLTUuMTMwNDQsOC43MTAxOWMtMS4zNjI1NiwyLjQ4NTk0IC0yLjYyMDMxLDQuOTg1MzEgLTMuODI3LDcuNDgyek04Niw0NC42MDQ0NGMzLjQxODUsMy42MDM5NCA2Ljc3Nzg3LDcuNjk0MzEgMTAuMDIxNjksMTIuMTI4NjljLTMuMjY4LC0wLjE5MDgxIC02LjYwODU2LC0wLjI5NTYzIC0xMC4wMjE2OSwtMC4yOTU2M2MtMy40MTMxMywwIC02Ljc1MzY5LDAuMTA0ODEgLTEwLjAyMTY5LDAuMjk1NjNjMy4yNDM4MSwtNC40MzQzNyA2LjYwMzE5LC04LjUyNDc1IDEwLjAyMTY5LC0xMi4xMjg2OXpNMTExLjk0NzgxLDcxLjgzNDE5Yy0xLjYzNjY5LC0yLjk5OTI1IC0zLjM2NDc1LC01Ljg4NTYzIC01LjEzMDQ0LC04LjcxMDE5YzQuODM0ODEsMC42MzE1NiA5LjMxMjE5LDEuNDg2MTkgMTMuNDYxNjksMi40OTY2OWMtMS4xNzcxMyw0LjQzOTc1IC0yLjY3Njc1LDkuMDI0NjMgLTQuNTA0MjUsMTMuNjk1NWMtMS4yMDkzOCwtMi40OTY2OSAtMi40NjcxMiwtNC45OTYwNiAtMy44MjcsLTcuNDgyek00OS4yMjE1Niw1My4wODg4OGMtMS40NjczNywtMTIuMjI1NDQgMC42NzE4OCwtMjAuODY1NzUgNS44Njk1LC0yMy42OTgzN2MxLjMxMTUsLTAuNzE3NTYgMi44Mjk5NCwtMS4wNjY5NCA0LjUxNzY5LC0xLjA2Njk0YzQuOTk4NzUsMCAxMS40OTcxMywzLjA4MjU2IDE4LjU5MjEzLDguOTQ0YzEuMzMzLDEuMTAxODcgMi42Njg2OSwyLjI4OTc1IDMuOTk5LDMuNTQ0ODFjLTQuNTQ5OTQsNC43ODY0NCAtOC45ODk2OSwxMC4zNjMgLTEzLjE5MDI1LDE2LjQ3OTc1Yy02LjYxOTMxLDAuNjc0NTYgLTEyLjgzNTUsMS43NDE1IC0xOC41MjIyNSwzLjEzMzYzYy0wLjUzMjEzLC0yLjUxMDEyIC0wLjk4MDk0LC00Ljk3NDU2IC0xLjI2NTgxLC03LjMzNjg3ek0yMS41LDg2YzAsLTYuOTg3NSA5LjMyNTYzLC0xNC4yNTE4MSAyNS4wMzk0NCwtMTguOTczNzVjMS42Mjg2Myw2LjEyNDgxIDMuODYxOTQsMTIuNTA3NjMgNi42NDA4MSwxOC45NzM3NWMtMi43Nzg4Nyw2LjQ2ODgxIC01LjAxMjE5LDEyLjg1MTYyIC02LjY0MDgxLDE4Ljk3Mzc1Yy0xNS43MTM4MSwtNC43MjE5NCAtMjUuMDM5NDQsLTExLjk4NjI1IC0yNS4wMzk0NCwtMTguOTczNzV6TTc4LjIwMDg4LDEzNC43MzUxM2MtOS40ODY4Nyw3LjgzOTQ0IC0xNy45MDQxMiwxMC43MjA0NCAtMjMuMTA5ODEsNy44NzcwNmMtNS4xOTc2MywtMi44MzUzMSAtNy4zMzQxOSwtMTEuNDc1NjMgLTUuODY5NSwtMjMuNjk4MzdjMC4yODIxOSwtMi4zNjIzMSAwLjczMzY5LC00LjgyNjc1IDEuMjYwNDQsLTcuMzM0MTljNS42ODk0NCwxLjM5NDgxIDExLjkwNTYzLDIuNDU5MDYgMTguNTIyMjUsMy4xMzM2MmM0LjIwMzI1LDYuMTE0MDYgOC42NDAzMSwxMS42OTMzMSAxMy4xOTAyNSwxNi40Nzk3NWMtMS4zMjc2MywxLjI1MjM4IC0yLjY2MDYyLDIuNDQwMjUgLTMuOTkzNjMsMy41NDIxM3pNMTIyLjc3ODQ0LDExOC45MTExM2MxLjQ2NzM3LDEyLjIyNTQ0IC0wLjY3MTg3LDIwLjg2NTc1IC01Ljg2OTUsMjMuNjk4MzdjLTUuMTk3NjIsMi44NDYwNiAtMTMuNjIwMjUsLTAuMDM3NjIgLTIzLjEwOTgxLC03Ljg3NzA2Yy0xLjMzMywtMS4xMDE4NyAtMi42Njg2OSwtMi4yODk3NSAtMy45OTksLTMuNTQ0ODFjNC41NDk5NCwtNC43ODY0NCA4Ljk4OTY5LC0xMC4zNjMgMTMuMTkwMjUsLTE2LjQ3OTc1YzYuNjE5MzEsLTAuNjc0NTYgMTIuODM1NSwtMS43NDE1IDE4LjUyMjI1LC0zLjEzMzYyYzAuNTMyMTIsMi41MTAxMiAwLjk4MDk0LDQuOTc0NTYgMS4yNjU4MSw3LjMzNjg3ek0xMjUuNDYwNTYsMTA0Ljk3Mzc1Yy0xLjYyODYyLC02LjEyNDgxIC0zLjg2MTk0LC0xMi41MDc2MiAtNi42NDA4MSwtMTguOTczNzVjMi43Nzg4NywtNi40Njg4MSA1LjAxMjE5LC0xMi44NTE2MiA2LjY0MDgxLC0xOC45NzM3NWMxNS43MTM4MSw0LjcyMTk0IDI1LjAzOTQ0LDExLjk4NjI1IDI1LjAzOTQ0LDE4Ljk3Mzc1YzAsNi45ODc1IC05LjMyNTYzLDE0LjI1MTgxIC0yNS4wMzk0NCwxOC45NzM3NXoiIGZpbGw9InVybCgjY29sb3ItMl90NFliRWJBODM0dUhfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
						alt="React/Next"
						width={70}
						height={72}
					/>
					<H3Head>React/Next</H3Head>
				</Cards>
				<Cards className={`${ItemAlignment} flex-col`}>
					<Logo
						src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSI2Ny43NTk5NCIgeDI9Ijg2IiB5Mj0iOTguNjkwMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMV90NFliRWJBODM0dUhfZ3IxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmY2RlYTciPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmM5ZTIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iODYiIHkxPSIxOS45NTczOCIgeDI9Ijg2IiB5Mj0iMTQzLjYyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTJfdDRZYkViQTgzNHVIX2dyMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjliNTNhIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmY1OWE4Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiB0cmFuc2Zvcm09InNjYWxlKDIuNjg3NSwyLjY4NzUpIiByPSI2IiBmaWxsPSJ1cmwoI2NvbG9yLTFfdDRZYkViQTgzNHVIX2dyMSkiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0xNTUuODc1LDg2YzAsLTEwLjA5OTYzIC0xMS40MDMwNiwtMTguODU4MTkgLTI5LjE2NzQ0LC0yNC4xNjZjMC41OTM5NCwtMi43NzA4MSAxLjA5MzgxLC01LjQ5NTk0IDEuNDA4MjUsLTguMTAyODFjMS43NjU2OSwtMTQuNzM1NTYgLTEuMjk4MDYsLTI1LjA1NTU2IC04LjYyOTU2LC0yOS4wNTk5NGMtNy4zMzQxOSwtNC4wMDE2OSAtMTcuNjY3NjIsLTAuOTk5NzUgLTI5LjEwODMxLDguNDU0ODhjLTEuNDYyLDEuMjA2NjkgLTIuOTIxMzEsMi41MjA4NyAtNC4zNzc5NCwzLjg5Njg3Yy0xLjQ1NjYzLC0xLjM3ODY5IC0yLjkxNTk0LC0yLjY5MDE5IC00LjM3Nzk0LC0zLjg5Njg3Yy0xMS40NDA2OSwtOS40NTQ2MiAtMjEuNzc5NSwtMTIuNDUzODcgLTI5LjEwODMxLC04LjQ1NDg3Yy03LjMzMTUsNC4wMDE2OSAtMTAuMzk1MjUsMTQuMzIxNjkgLTguNjI5NTYsMjkuMDU5OTRjMC4zMTE3NSwyLjYwOTU2IDAuODE0MzEsNS4zMzIgMS40MDgyNSw4LjEwMjgxYy0xNy43NjQzOCw1LjMwNzgxIC0yOS4xNjc0NCwxNC4wNjYzNyAtMjkuMTY3NDQsMjQuMTY2YzAsMTAuMDk5NjIgMTEuNDAzMDYsMTguODU4MTkgMjkuMTY3NDQsMjQuMTY2Yy0wLjU5Mzk0LDIuNzcwODEgLTEuMDkzODEsNS40OTU5NCAtMS40MDgyNSw4LjEwMjgxYy0xLjc2NTY5LDE0LjczNTU2IDEuMjk4MDYsMjUuMDU1NTYgOC42Mjk1NiwyOS4wNTk5NGMyLjEyMDQ0LDEuMTU4MzEgNC40ODgxMywxLjcyODA2IDcuMDYyNzUsMS43MjgwNmM2LjMzNDQ0LDAgMTMuOTEzMTksLTMuNDU4ODEgMjIuMDQ1NTYsLTEwLjE4MDI1YzEuNDYyLC0xLjIwNjY5IDIuOTIxMzEsLTIuNTIwODggNC4zNzc5NCwtMy44OTY4OGMxLjQ1NjYzLDEuMzc4NjkgMi45MTU5NCwyLjY5MDE5IDQuMzc3OTQsMy44OTY4OGM4LjEzMjM4LDYuNzIxNDQgMTUuNzExMTIsMTAuMTgwMjUgMjIuMDQ1NTYsMTAuMTgwMjVjMi41NzQ2MiwwIDQuOTQ1LC0wLjU3MjQ0IDcuMDYyNzUsLTEuNzI4MDZjNy4zMzE1LC00LjAwMTY5IDEwLjM5NTI1LC0xNC4zMjE2OSA4LjYyOTU2LC0yOS4wNTk5NGMtMC4zMTE3NSwtMi42MDk1NiAtMC44MTQzMSwtNS4zMzIgLTEuNDA4MjUsLTguMTAyODFjMTcuNzY0MzgsLTUuMzA3ODEgMjkuMTY3NDQsLTE0LjA2NjM4IDI5LjE2NzQ0LC0yNC4xNjZ6TTkzLjc5OTEzLDM3LjI2NDg3YzkuNDg2ODcsLTcuODM5NDQgMTcuOTEyMTksLTEwLjcxNTA2IDIzLjEwOTgxLC03Ljg3NzA2YzUuMTk3NjMsMi44MzUzMSA3LjMzNDE5LDExLjQ3NTYzIDUuODY5NSwyMy42OTgzOGMtMC4yODIxOSwyLjM2MjMxIC0wLjczMzY5LDQuODI2NzUgLTEuMjYwNDQsNy4zMzQxOWMtNS42ODk0NCwtMS4zOTQ4MSAtMTEuOTA1NjIsLTIuNDU5MDYgLTE4LjUyMjI1LC0zLjEzMzYzYy00LjIwMzI1LC02LjExNDA2IC04LjY0MDMxLC0xMS42OTMzMSAtMTMuMTkwMjUsLTE2LjQ3OTc1YzEuMzI3NjIsLTEuMjUyMzcgMi42NjA2MiwtMi40NDAyNSAzLjk5MzYzLC0zLjU0MjEyek0xMDcuMjI4NTYsOTcuNTkxMTljLTIuMjkyNDQsNC4xOTc4NyAtNC43Myw4LjIxMDMxIC03LjI2MTYzLDEyLjAyMzg4Yy00LjQzNzA2LDAuMzcwODcgLTkuMDk5ODcsMC41NzI0NCAtMTMuOTY2OTQsMC41NzI0NGMtNC44NjcwNiwwIC05LjUyOTg4LC0wLjIwMTU2IC0xMy45Njk2MywtMC41NzI0NGMtMi41Mjg5NCwtMy44MTYyNSAtNC45NjkxOSwtNy44MjYgLTcuMjYxNjIsLTEyLjAyMzg3Yy0yLjEwNywtMy44NTY1NiAtNC4wMjg1NiwtNy43MzQ2MiAtNS43NTY2MiwtMTEuNTkxMTljMS43MjgwNiwtMy44NTM4OCAzLjY0OTYzLC03LjczMTk0IDUuNzU2NjIsLTExLjU5MTE5YzIuMjkyNDQsLTQuMTk3ODcgNC43MywtOC4yMTAzMSA3LjI2MTYyLC0xMi4wMjM4N2M0LjQzOTc1LC0wLjM3MDg3IDkuMTAyNTYsLTAuNTcyNDQgMTMuOTY5NjMsLTAuNTcyNDRjNC44NjcwNiwwIDkuNTI5ODgsMC4yMDE1NiAxMy45Njk2MywwLjU3MjQ0YzIuNTI4OTQsMy44MTYyNSA0Ljk2OTE5LDcuODI2IDcuMjYxNjIsMTIuMDIzODdjMi4xMDcsMy44NTY1NiA0LjAyODU2LDcuNzM0NjMgNS43NTY2MywxMS41OTExOWMtMS43MjgwNiwzLjg1Mzg3IC0zLjY1MjMxLDcuNzMxOTQgLTUuNzU5MzEsMTEuNTkxMTl6TTExNS43NzIxMyw5Mi42ODM4MWMxLjgyNzUsNC42NzM1NiAzLjMyNzEzLDkuMjU1NzUgNC41MDQyNSwxMy42OTU1Yy00LjE0OTUsMS4wMTA1IC04LjYyNjg3LDEuODY1MTMgLTEzLjQ2MTY5LDIuNDk2NjljMS43NjU2OSwtMi44MjE4NyAzLjQ5Mzc1LC01LjcwODI1IDUuMTMwNDQsLTguNzEwMTljMS4zNjI1NiwtMi40ODU5NCAyLjYyMDMxLC00Ljk4NTMxIDMuODI3LC03LjQ4MnpNODYsMTI3LjM5NTU2Yy0zLjQxODUsLTMuNjAzOTQgLTYuNzc3ODcsLTcuNjk0MzEgLTEwLjAyMTY5LC0xMi4xMjg2OWMzLjI2OCwwLjE5MDgxIDYuNjA4NTYsMC4yOTU2MyAxMC4wMjE2OSwwLjI5NTYzYzMuNDEzMTIsMCA2Ljc1MzY5LC0wLjEwNDgxIDEwLjAyMTY5LC0wLjI5NTYzYy0zLjI0MzgxLDQuNDM0MzggLTYuNjAzMTksOC41MjQ3NSAtMTAuMDIxNjksMTIuMTI4Njl6TTY1LjE4MjYzLDEwOC44NzZjLTQuODM0ODEsLTAuNjMxNTYgLTkuMzEyMTksLTEuNDg2MTkgLTEzLjQ2MTY5LC0yLjQ5NjY5YzEuMTc3MTIsLTQuNDM5NzUgMi42NzY3NSwtOS4wMjQ2MiA0LjUwNDI1LC0xMy42OTU1YzEuMjA5MzgsMi40OTkzOCAyLjQ2NzEzLDQuOTk2MDYgMy44MjQzMSw3LjQ4NDY5YzEuNjM5MzgsMi45OTkyNSAzLjM2NzQ0LDUuODg1NjMgNS4xMzMxMyw4LjcwNzV6TTU2LjIyNzg4LDc5LjMxNjE5Yy0xLjgyNzUsLTQuNjczNTYgLTMuMzI3MTMsLTkuMjU4NDQgLTQuNTA0MjUsLTEzLjY5NTVjNC4xNDk1LC0xLjAxMDUgOC42MjY4OCwtMS44NjUxMiAxMy40NjE2OSwtMi40OTY2OWMtMS43NjU2OSwyLjgyMTg4IC0zLjQ5Mzc1LDUuNzA4MjUgLTUuMTMwNDQsOC43MTAxOWMtMS4zNjI1NiwyLjQ4NTk0IC0yLjYyMDMxLDQuOTg1MzEgLTMuODI3LDcuNDgyek04Niw0NC42MDQ0NGMzLjQxODUsMy42MDM5NCA2Ljc3Nzg3LDcuNjk0MzEgMTAuMDIxNjksMTIuMTI4NjljLTMuMjY4LC0wLjE5MDgxIC02LjYwODU2LC0wLjI5NTYzIC0xMC4wMjE2OSwtMC4yOTU2M2MtMy40MTMxMywwIC02Ljc1MzY5LDAuMTA0ODEgLTEwLjAyMTY5LDAuMjk1NjNjMy4yNDM4MSwtNC40MzQzNyA2LjYwMzE5LC04LjUyNDc1IDEwLjAyMTY5LC0xMi4xMjg2OXpNMTExLjk0NzgxLDcxLjgzNDE5Yy0xLjYzNjY5LC0yLjk5OTI1IC0zLjM2NDc1LC01Ljg4NTYzIC01LjEzMDQ0LC04LjcxMDE5YzQuODM0ODEsMC42MzE1NiA5LjMxMjE5LDEuNDg2MTkgMTMuNDYxNjksMi40OTY2OWMtMS4xNzcxMyw0LjQzOTc1IC0yLjY3Njc1LDkuMDI0NjMgLTQuNTA0MjUsMTMuNjk1NWMtMS4yMDkzOCwtMi40OTY2OSAtMi40NjcxMiwtNC45OTYwNiAtMy44MjcsLTcuNDgyek00OS4yMjE1Niw1My4wODg4OGMtMS40NjczNywtMTIuMjI1NDQgMC42NzE4OCwtMjAuODY1NzUgNS44Njk1LC0yMy42OTgzN2MxLjMxMTUsLTAuNzE3NTYgMi44Mjk5NCwtMS4wNjY5NCA0LjUxNzY5LC0xLjA2Njk0YzQuOTk4NzUsMCAxMS40OTcxMywzLjA4MjU2IDE4LjU5MjEzLDguOTQ0YzEuMzMzLDEuMTAxODcgMi42Njg2OSwyLjI4OTc1IDMuOTk5LDMuNTQ0ODFjLTQuNTQ5OTQsNC43ODY0NCAtOC45ODk2OSwxMC4zNjMgLTEzLjE5MDI1LDE2LjQ3OTc1Yy02LjYxOTMxLDAuNjc0NTYgLTEyLjgzNTUsMS43NDE1IC0xOC41MjIyNSwzLjEzMzYzYy0wLjUzMjEzLC0yLjUxMDEyIC0wLjk4MDk0LC00Ljk3NDU2IC0xLjI2NTgxLC03LjMzNjg3ek0yMS41LDg2YzAsLTYuOTg3NSA5LjMyNTYzLC0xNC4yNTE4MSAyNS4wMzk0NCwtMTguOTczNzVjMS42Mjg2Myw2LjEyNDgxIDMuODYxOTQsMTIuNTA3NjMgNi42NDA4MSwxOC45NzM3NWMtMi43Nzg4Nyw2LjQ2ODgxIC01LjAxMjE5LDEyLjg1MTYyIC02LjY0MDgxLDE4Ljk3Mzc1Yy0xNS43MTM4MSwtNC43MjE5NCAtMjUuMDM5NDQsLTExLjk4NjI1IC0yNS4wMzk0NCwtMTguOTczNzV6TTc4LjIwMDg4LDEzNC43MzUxM2MtOS40ODY4Nyw3LjgzOTQ0IC0xNy45MDQxMiwxMC43MjA0NCAtMjMuMTA5ODEsNy44NzcwNmMtNS4xOTc2MywtMi44MzUzMSAtNy4zMzQxOSwtMTEuNDc1NjMgLTUuODY5NSwtMjMuNjk4MzdjMC4yODIxOSwtMi4zNjIzMSAwLjczMzY5LC00LjgyNjc1IDEuMjYwNDQsLTcuMzM0MTljNS42ODk0NCwxLjM5NDgxIDExLjkwNTYzLDIuNDU5MDYgMTguNTIyMjUsMy4xMzM2MmM0LjIwMzI1LDYuMTE0MDYgOC42NDAzMSwxMS42OTMzMSAxMy4xOTAyNSwxNi40Nzk3NWMtMS4zMjc2MywxLjI1MjM4IC0yLjY2MDYyLDIuNDQwMjUgLTMuOTkzNjMsMy41NDIxM3pNMTIyLjc3ODQ0LDExOC45MTExM2MxLjQ2NzM3LDEyLjIyNTQ0IC0wLjY3MTg3LDIwLjg2NTc1IC01Ljg2OTUsMjMuNjk4MzdjLTUuMTk3NjIsMi44NDYwNiAtMTMuNjIwMjUsLTAuMDM3NjIgLTIzLjEwOTgxLC03Ljg3NzA2Yy0xLjMzMywtMS4xMDE4NyAtMi42Njg2OSwtMi4yODk3NSAtMy45OTksLTMuNTQ0ODFjNC41NDk5NCwtNC43ODY0NCA4Ljk4OTY5LC0xMC4zNjMgMTMuMTkwMjUsLTE2LjQ3OTc1YzYuNjE5MzEsLTAuNjc0NTYgMTIuODM1NSwtMS43NDE1IDE4LjUyMjI1LC0zLjEzMzYyYzAuNTMyMTIsMi41MTAxMiAwLjk4MDk0LDQuOTc0NTYgMS4yNjU4MSw3LjMzNjg3ek0xMjUuNDYwNTYsMTA0Ljk3Mzc1Yy0xLjYyODYyLC02LjEyNDgxIC0zLjg2MTk0LC0xMi41MDc2MiAtNi42NDA4MSwtMTguOTczNzVjMi43Nzg4NywtNi40Njg4MSA1LjAxMjE5LC0xMi44NTE2MiA2LjY0MDgxLC0xOC45NzM3NWMxNS43MTM4MSw0LjcyMTk0IDI1LjAzOTQ0LDExLjk4NjI1IDI1LjAzOTQ0LDE4Ljk3Mzc1YzAsNi45ODc1IC05LjMyNTYzLDE0LjI1MTgxIC0yNS4wMzk0NCwxOC45NzM3NXoiIGZpbGw9InVybCgjY29sb3ItMl90NFliRWJBODM0dUhfZ3IyKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
						alt="React Native"
						width={70}
						height={72}
					/>
					<H3Head>React Native</H3Head>
				</Cards>
			</ContainerCards>

			<h1 id="projects" />

			<Link href="/AboutMe#skills" passHref>
				<Button2 className={`${ItemAlignment} ${WidthAuto} mb-40 mt-24`}>
					<Body1>Ver mais skills</Body1>
					<Icon
						path={mdiArrowRight}
						title="User Profile"
						size="20px"
						color="#fff"
					/>
				</Button2>
			</Link>
			<H3Head className={`${TextH3} mb-20`}>Meus projetos</H3Head>

			<div className="flex flex-col items-center py-5 mb-20">
				<HeroSection className="bg-heroRed" data-cy="red-heroSection">
					<div className="w-[500px] sm:w-[220px] md:w-[250px] mb-2">
						<Imagem
							src={imgSite}
							alt="portifolio"
							height={387}
							width={1129}
							quality={100}
						/>
					</div>
					<a
						href="https://github.com/kallif003/kallif003.github.io"
						target="_blank"
						rel="noreferrer">
						<div className={`hover:bg-[#ae2334] ${DivHeroSection}`}>
							<h1 className="text-xl">Portifólio</h1>
							<p className="sm:text-[12px] md:text-[15px]">
								Site desenvolvido com Next, Type e Tailwind
							</p>
						</div>
					</a>
				</HeroSection>

				<HeroSection className="bg-heroPurple" data-cy="purple-heroSection">
					<div className="flex flex-row justify-center sm:pl-6 w-full pl-16 md:pl-8 lg:pl-10">
						<div className="w-[150px] sm:w-[60px] md:w-[70px]">
							<Imagem
								className=""
								src={list}
								alt="app"
								width={400}
								quality={100}
							/>
						</div>
						<div className="w-[190px] sm:w-[76px] md:w-[90px] ">
							<Imagem
								className=""
								src={list2}
								alt="pizza"
								width={500}
								quality={100}
							/>
						</div>
					</div>
					<a
						href="https://github.com/kallif003/App-listando"
						target="_blank"
						rel="noreferrer">
						<div
							className={`hover:bg-[#8100E5] mx-auto sm:mr-0 md:mx-auto ${DivHeroSection}`}>
							<h1 className="text-xl">App. Listando</h1>
							<p className="sm:text-[12px] md:text-[15px]">
								Desenvolvido para criar listas de afazeres
							</p>
						</div>
					</a>
				</HeroSection>

				<HeroSection className="bg-heroYellow " data-cy="yellow-heroSection">
					<div className="w-[450px] sm:w-[200px] md:w-[250px] mb-2">
						<Imagem
							src={img}
							alt="pizza"
							height={687}
							width={1366}
							quality={100}
						/>
					</div>
					<a
						href="https://github.com/kallif003/Sistema-Delivery"
						target="_blank"
						rel="noreferrer">
						<div className={`${DivHeroSection} hover:bg-[#d7a426]`}>
							<h1 className="text-xl">Delivery</h1>
							<p className="sm:text-sm md:text-[15px]">
								Sistema desktop para pizzarias
							</p>
						</div>
					</a>
				</HeroSection>
			</div>

			<H3Head className={`${TextH3} sm:my-20 sm:mx-2`}>Meu Blog</H3Head>

			<ContainerCards className="sm:mt-10 mt-20 mb-20 relative">
				{posts.slice(0, 2).map((post) => (
					<CardsMyBlog className="flex-col" key={post.slug}>
						<H3Head className=" absolute  pl-4 pt-4 font-bold">
							{post.title}
						</H3Head>
						<h2 className="text-yellow absolute  pl-4 pt-14 font-bold sm:text-[12px]">
							{post.description}
						</h2>
						<div className="w-[510px] sm:w-[300px] md:w-[350px] lg:w-[410px]">
							<Imagem
								src={post.image}
								alt="pizza"
								height={300}
								width={510}
								quality={100}
								className="opacity-10"
							/>
						</div>
						<Link
							href={{
								pathname: "/MyBlog/post",
								query: { slug: post.slug },
							}}
							passHref>
							<Button1 className={`${ButtonMyBlog}`}>Ler</Button1>
						</Link>
					</CardsMyBlog>
				))}
			</ContainerCards>
			<Link href={"./MyBlog"} passHref>
				<Button2 className={`${ItemAlignment} ${WidthAuto} mb-40 mt-24`}>
					<Body1>Conheça meu Blog</Body1>
					<Icon
						path={mdiArrowRight}
						title="User Profile"
						size="20px"
						color="#fff"
					/>
				</Button2>
			</Link>
			<div className="flex flex-col items-center">
				<Footer aboutMe="/AboutMe" />
			</div>
		</div>
	)
}

export default HomePage
