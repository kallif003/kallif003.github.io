/* eslint-disable @next/next/no-img-element */

import React from "react"
import Head from "next/head"
import HomePage from "./HomePage/HomePage"
import { createClient } from "../../prismicio"

interface IPosts {
	slug: string
	title: string
	description: string
	image: string
}

interface HomePosts {
	posts: IPosts[]
}
function Home({ posts }: HomePosts) {
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
			<HomePage posts={posts} />
		</div>
	)
}

export default Home

export async function getStaticProps({ previewData }: any) {
	const client = createClient({ previewData })

	const home = await client.getAllByType("my-blog", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

	const posts = home.map((e) => ({
		slug: e.uid,
		title: e.data.title,
		description: e.data.description,
		image: e.data.image.url,
	}))

	return {
		props: {
			posts,
		},
	}
}
