import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import AboutMe from "./AboutMe"

export default {
	title: "Prototipo/AboutMePage",
	component: AboutMe,
} as ComponentMeta<typeof AboutMe>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof AboutMe> = () => (
	<div>
		<AboutMe />
	</div>
)

export const Desktop = Template.bind({})
