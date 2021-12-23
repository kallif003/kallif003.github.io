import type { NextPage } from "next"
<<<<<<< HEAD
import React, { useState } from "react"
=======
import React from "react"
>>>>>>> chore: adicao commitlint e commitizen
import Head from "next/head"

const Home: NextPage = function () {
<<<<<<< HEAD
	const [count, setCount] = useState<number>(0)

=======
>>>>>>> chore: adicao commitlint e commitizen
	return (
		<div>
			  <Head>
				<title>Kallif - Dev</title>
			</Head>
			<h3 className="text-6xl text-white">Hello world!</h3>
<<<<<<< HEAD
			<p>Bem vindo ao site do Kallif</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}>
				Count +
			</button>
			<p>Count is {count}</p>
=======
>>>>>>> chore: adicao commitlint e commitizen
		</div>
	)
}

export default Home
