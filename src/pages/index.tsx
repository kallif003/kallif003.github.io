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
			</Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<link rel="icon" href="/favicon.ico" />
			<HomePage />
		</div>
	)
}

export default Home
