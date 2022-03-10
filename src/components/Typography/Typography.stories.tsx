import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
	H1Head,
	H2Head,
	H3Head,
	H4Head,
	H5Head,
	Subtittle,
	Subtittle2,
	Body1,
	Body2,
} from "."

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Typography",
	component: H1Head,
} as ComponentMeta<typeof H1Head>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1Head> = (args) => (
	<div>
		<H1Head>H1Head</H1Head>
		<H2Head>H2Head</H2Head>
		<H3Head>H3Head</H3Head>
		<H4Head>H4Head</H4Head>
		<H5Head>H5Head</H5Head>
		<Subtittle>Subtittle 1</Subtittle>
		<Subtittle2>Subtittle 2</Subtittle2>
		<Body1>Body 1</Body1>
		<Body2>Body 2</Body2>
	</div>
)

export const Default = Template.bind({})
