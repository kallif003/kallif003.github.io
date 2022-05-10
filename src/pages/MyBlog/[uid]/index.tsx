import React from "react"
// import { H1Head } from "../../..components/Typography"
// import { Imagem } from "../../..components/HeroSection/HeroSection"
// import { AuthContext } from "../../..context"
import { createClient } from "../../../../prismicio"
import { GetStaticProps, GetStaticPaths } from "next"

export default function MyBlog() {
	return (
		<section className="items-center text-white">
			<h1>oi</h1>
		</section>
	)
}
export const getStaticPaths: GetStaticPaths = async () => {
	const client = createClient()
	const posts = await client.getAllByType("my-blog")
	const paths = posts.map((post) => ({
		params: {
			uid: post.uid,
		},
	}))
	console.log(paths)
	return {
		paths,
		fallback: true,
	}
}
export const getStaticProps: GetStaticProps = async (context) => {
	// const client = createClient()

	// const response = await client.getByUID("my-blog", uid)
	console.log(context)

	return {
		props: {},
	}
}
