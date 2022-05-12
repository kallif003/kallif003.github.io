import React, { useEffect, useState } from "react"
import { H1Head } from "../../../components/Typography"
import { Imagem } from "../../../components/HeroSection/HeroSection"
import { createClient } from "../../../../prismicio"
import { useRouter } from "next/router"
import { PrismicRichText } from "@prismicio/react"

interface List {
	id: string
	title: string
	description: string
	content: string
	image: string
	richText: string
}

export default function MyBlog() {
	const router = useRouter()
	const [post, setPost] = useState<List[]>([])
	const { slug } = router.query

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const response = [await client.getByUID("my-blog", String(slug))]
			console.log(response)
			const data = response.map((p) => ({
				id: p.id,
				title: p.data.title,
				description: p.data.description,
				content: p.data.content,
				image: p.data.image.url,
				richText: p.data.richText,
			}))
			setPost(data)
		}
		if (slug !== undefined) {
			getProps()
		}
	})
	return (
		<section className="items-center text-white">
			{post.map((p) => (
				<div key={p.id} className="my-10 mx-10">
					<H1Head className="text-yellow sm:text-[30px] sm:leading-9 pb-2">
						{p.title}
					</H1Head>
					<h2 className="pb-5">{p.description}</h2>
					<Imagem
						src={p.image}
						alt={p.title}
						height={515}
						width={1600}
						quality={100}
						className="opacity-20 "
					/>
					<div className="pr-20 ">
						<PrismicRichText field={p.richText} />
					</div>
				</div>
			))}
		</section>
	)
}
