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
		<section className="items-center text-center">
			<H1Head className="text-yellow text-[50px] px-10 pt-10 sm:text-[30px] sm:leading-9 pb-2  ">
				Confira os Posts Semanais
			</H1Head>
			<h2 className="text-white pb-10 px-10 text-center ">
				Tudo sobre tecnlogia front end
			</h2>
			<ContainerCards className="flex-wrap text-white  px-5">
				{post.map((post) => (
					<DivMyBlog key={post.slug}>
						<H3Head className=" absolute z-20 pl-4 pt-4 font-bold ">
							{post.title}
						</H3Head>

						<p className="text-yellow absolute z-20 pl-4 pt-14 font-bold sm:text-[12px]">
							{post.description}
						</p>

						<Imagem
							src={post.image}
							alt="pizza"
							height={315}
							width={450}
							quality={100}
							className="opacity-10"
						/>
						<Link
							href={{
								pathname: "/MyBlog/post",
								query: { slug: post.slug },
							}}
							passHref>
							<Button1 className="text-[18px] mb-5 absolute z-20 top-[-80px] left-28 sm:left-20 sm:w-[120px] lg:left-24">
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

	const home = await client.getAllByType("my-blog", {
		orderings: [
			{ field: "document.first_publication_date", direction: "desc" },
		],
	})

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
