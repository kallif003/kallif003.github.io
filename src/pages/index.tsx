/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import React from "react"
import Head from "next/head"
import HomePage from "./HomePage/HomePage"

const Home: NextPage = function () {
	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
			<HomePage />
		</div>
	)
}

export default Home
