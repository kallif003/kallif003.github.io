/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import HomePage from "../pages/HomePage/HomePage"

const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
				<meta property="og:title" content="Kallif - Dev. FrontEnd" />
				<meta property="og:url" content="https://kallif003.github.io/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="../../../assests/Image/portifolio.png"
				/>
			</Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<link rel="icon" href="/favicon.ico" />
			<HomePage />
		</div>
	)
}

export default Home
