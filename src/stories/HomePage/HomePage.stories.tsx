import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import HomePage from "../../pages/HomePage/HomePage"

export default {
	title: "Prototipo/HomePage",
	component: HomePage,
} as ComponentMeta<typeof HomePage>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof HomePage> = () => (
	<div>
		<HomePage />
	</div>
)

export const Desktop = Template.bind({})
