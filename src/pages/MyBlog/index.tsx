import React from "react"
import { DivMyBlog, ContainerCards } from "../../components/Cards"

import { H1Head, H3Head } from "../../components/Typography"
import { Button1 } from "../../components/Buttons"
import { Imagem } from "../../components/HeroSection/HeroSection"
// import { AuthContext } from "../../../context/index"
import { createClient } from "../../../prismicio"
import Link from "next/link"

interface IPosts {
	slug: string
	title: string
	description: string
	image: string
}

interface Posts {
	post: IPosts[]
}

export default function MyBlog({ post }: Posts) {
	// const { getPost }: any = useContext(AuthContext)

	return (
		<section className="items-center">
			<H1Head className="text-yellow text-[50px] px-10 pt-10">
				Confira os Posts Semanais
			</H1Head>
			<h2 className="text-white pb-10 px-10">Tudo sobre tecnlogia front end</h2>
			<ContainerCards className="flex-wrap text-white">
				{post.map((post) => (
					<DivMyBlog key={post.slug}>
						<H3Head className=" absolute z-20 pl-4 pt-4 font-bold">
							{post.title}
						</H3Head>

						<h2 className="text-yellow absolute z-20 pl-4 pt-14 font-bold ">
							{post.description}
						</h2>

						<Imagem
							src={post.image}
							alt="pizza"
							height={315}
							width={450}
							quality={100}
							className="opacity-20"
						/>
						<Link
							href={{
								pathname: "/MyBlog/uid",
								query: { post: post.slug },
							}}
							passHref>
							<Button1 className="text-[18px] mb-5 absolute z-20 top-[-80px] left-60">
								Ler
							</Button1>
						</Link>
					</DivMyBlog>
				))}
			</ContainerCards>
		</section>
	)
}

export async function getStaticProps() {
	const client = createClient()

	const home = await client.getAllByType("my-blog")

	const post = home.map((e) => ({
		slug: e.uid,
		title: e.data.title,
		description: e.data.description,
		image: e.data.image.url,
	}))

	return {
		props: {
			post,
		},
	}
}
