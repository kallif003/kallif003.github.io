import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import img from "../../../assets/Image/sistema-delivery.png"
import { H3Head } from "../Typography"
import { HeroSection, Container, Imagem } from "./HeroSection"

export default {
	title: "Moleculas/HeroSection",
	component: HeroSection,
} as ComponentMeta<typeof HeroSection>

const Template: ComponentStory<typeof HeroSection> = (args) => (
	<div>
		<HeroSection color={args.color}>
			<Container>
				<Imagem
					src={args.img}
					alt="Sistema Delivery"
					width={args.width}
					height={args.height}
				/>
			</Container>
			<H3Head className="text-white pl-10 pt-10">
				Sistema Delivery - Pizzarias & Esfiharias
			</H3Head>
		</HeroSection>
	</div>
)

export const Yellow = Template.bind({})
Yellow.args = {
	color: "#EFB72B",
	width: "500px",
	height: "300px",
	img: img,
}

export const Purple = Template.bind({})
Purple.args = {
	color: "#9000FF",
	width: "500px",
	height: "300px",
	img: img,
}

export const Red = Template.bind({})
Red.args = {
	color: "#C2273A",
	width: "500px",
	height: "300px",
	img: img,
}
