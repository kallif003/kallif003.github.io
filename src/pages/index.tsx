import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import Header from "../components/Header/Header"

const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<Header></Header>
		</div>
	)
}

export default Home
