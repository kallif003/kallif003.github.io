import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { H1Head, H2Head } from "."

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Atoms/Typography",
	component: H1Head,
} as ComponentMeta<typeof H1Head>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1Head> = () => (
	<div>
		<H1Head>H1Head</H1Head>
		<H2Head>H2Head</H2Head>
	</div>
)

export const Default = Template.bind({})
