import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import {
	H3Head,
	Subtittle,
	Subtittle2,
} from "../components/Typography/Typography"
import { Button1, Ul, Li, Ancora } from "../components/Buttons"

const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<Ul className="space-x-12 flex items-center">
				<Li>
					<Ancora>Home</Ancora>
				</Li>
				<Li>
					<Ancora>Projetos</Ancora>
				</Li>
				<Li>
					<Ancora>Sobre</Ancora>
				</Li>
			</Ul>

			<Button1>
				<a href="mailto:kallifabrahao@gmail.com">Contate-me</a>
			</Button1>
		</div>
	)
}

export default Home
