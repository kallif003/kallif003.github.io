import type { NextPage } from "next"
import React, { useState } from "react"
import Head from "next/head"
import {
	H3Head,
	Subtittle,
	Subtittle2,
} from "../components/Typography/Typography"

const Home: NextPage = function () {
	const [count, setCount] = useState<number>(0)

	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<H3Head className="text-6xl text-white">Hello world!</H3Head>
			<p>Bem vindo ao site do Kallif</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}>
				Count +
			</button>
			<Subtittle>ola ijdiejdijed ijdiejdied ijdiejdijed </Subtittle>
			<Subtittle2>oi odkeokdoekdoed okdeokdoek odkeokdeo</Subtittle2>
			<p>Count is {count}</p>
		</div>
	)
}

export default Home
