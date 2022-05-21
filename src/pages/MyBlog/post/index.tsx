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
	richText: []
	date: string
}

export default function MyBlog() {
	const router = useRouter()
	const [post, setPost] = useState<List[]>([])
	const { slug } = router.query

	useEffect(() => {
		async function getProps() {
			const client = createClient()
			const response = [await client.getByUID("my-blog", String(slug))]

			const data = response.map((p) => ({
				id: p.id,
				title: p.data.title,
				description: p.data.description,
				content: p.data.content,
				image: p.data.image.url,
				richText: p.data.richText,
				date: p.last_publication_date
					.slice(0, 10)
					.split("-")
					.reverse()
					.join("/"),
			}))

			setPost(data)
		}
		if (slug !== undefined) {
			getProps()
		}
	})
	return (
		<section className="">
			{post.map((p) => (
				<div
					key={p.id}
					className="flex flex-col items-center text-center text-white mx-5 my-5">
					<H1Head className="text-yellow sm:text-[30px] sm:leading-9 pb-2">
						{p.title}
					</H1Head>
					<h2 className="pb-2">{p.description}</h2>
					<p className="pb-5 text-[10px]">{`Postado em ${p.date}`}</p>
					<div className="sm:w-[20rem] md:w-[40rem]">
						<Imagem
							src={p.image}
							alt={p.title}
							height={415}
							width={800}
							quality={100}
							className="opacity-20 "
						/>
					</div>

					<div className=" text-white text-left my-5 mx-20 w-[50rem] sm:w-[20rem] md:w-[40rem]">
						<PrismicRichText
							field={p.richText}
							components={{
								heading1: ({ children }) => (
									<h1 className="mt-4 text-yellow text-[20px]">{children}</h1>
								),
								heading2: ({ children }) => (
									<h1 className="my-4 font-bold text-[15px]">{children}</h1>
								),
								heading3: ({ children }) => (
									<h1 className="text-yellow font-bold text-[15px] mt-4">
										{children}
									</h1>
								),
								paragraph: ({ children }) => (
									<p className="paragraph ">{children}</p>
								),
								list: ({ children }) => <ul className=" ">{children}</ul>,
							}}
						/>
					</div>
				</div>
			))}
		</section>
	)
}
