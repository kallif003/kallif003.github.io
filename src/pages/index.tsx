import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import Footer from "../components/Footer/Footer"

const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<Footer />
		</div>
	)
}

export default Home
