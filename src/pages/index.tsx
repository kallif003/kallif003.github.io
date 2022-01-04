import type { NextPage } from "next"
import React, { useState } from "react"
import Head from "next/head"

const Home: NextPage = function () {
	const [count, setCount] = useState<number>(0)

	return (
		<div>
			<Head>
				<title>Kallif - Dev</title>
			</Head>
			<h3 className="text-6xl text-white">Hello world!</h3>
			<p>Bem vindo ao site do Kallif</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}>
				Count +
			</button>
			<p>Count is {count}</p>
		</div>
	)
}

export default Home
