import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Header from "./Header"
import HeaderMobile from "./HeaderMobile"

export default {
	title: "Organismo/Header",
	component: Header,
} as ComponentMeta<typeof Header>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof Header> = () => (
	<div>
		<Header />
	</div>
)

const TemplateMobile: ComponentStory<typeof HeaderMobile> = (args) => (
	<div>
		<HeaderMobile />
	</div>
)
export const Desktop = Template.bind({})
export const Mobile = TemplateMobile.bind({})
