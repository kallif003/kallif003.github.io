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
				<meta
					property="og:description"
					content="Olá, Bem vindo ao meu portifólio, clique no link e conheça mais sobre mim!"
				/>
				<meta property="og:url" content="https://kallif003.github.io/" />
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://kallif003.github.io/_next/static/media/kallif.d37e3c3c.png"
				/>
				<meta property="og:image:width" content="100" />
				<meta property="og:image:height" content="100" />
			</Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<link rel="icon" href="/favicon.ico" />
			<HomePage />
		</div>
	)
}

export default Home
