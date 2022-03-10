import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import img from "../../../assets/Image/sistema-delivery.png"
import imgSite from "../../../assets/Image/site2.png"
import list from "../../../assets/Image/listando1.png"
import { H3Head } from "../Typography"
import { HeroSection, Container, Imagem } from "./HeroSection"

export default {
	title: "Moleculas/HeroSection",
	component: HeroSection,
} as ComponentMeta<typeof HeroSection>

const Template: ComponentStory<typeof HeroSection> = () => (
	<div>
		<HeroSection className="bg-heroYellow ">
			<Container>
				<Imagem src={img} alt="Sistema Delivery" width={500} height={300} />
			</Container>
			<H3Head className="text-white pl-10 pt-10">
				Sistema Delivery - Pizzarias e Esfiharias
			</H3Head>
		</HeroSection>

		<HeroSection className="bg-heroPurple">
			<Container>
				<Imagem src={list} alt="Sistema Delivery" width={200} height={300} />
			</Container>
			<H3Head className="text-white pl-10 pt-10">App-listando</H3Head>
		</HeroSection>

		<HeroSection className="bg-heroRed">
			<Container>
				<Imagem src={imgSite} alt="Sistema Delivery" width={500} height={300} />
			</Container>
			<H3Head className="text-white pl-10 pt-10">Portifólio</H3Head>
		</HeroSection>
	</div>
)

export const Default = Template.bind({})
