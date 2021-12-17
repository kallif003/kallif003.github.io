import type { NextPage } from "next"
import React from "react"
import Head from "next/head"

const teste = "teste"
console.log(teste)
const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Site do Kallif</title>
			</Head>
			<h3 className="text-6xl text-white">Hello world!</h3>
		</div>
	)
}

export default Home
