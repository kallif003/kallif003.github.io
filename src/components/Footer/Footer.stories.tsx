import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Footer from "./Footer"
import FooterMobile from "./FooterMobile"

export default {
	title: "Organismo/Footer",
	component: Footer,
} as ComponentMeta<typeof Footer>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof Footer> = () => (
	<div>
		<Footer />
	</div>
)

const TemplateMobile: ComponentStory<typeof FooterMobile> = () => (
	<div>
		<FooterMobile />
	</div>
)
export const Desktop = Template.bind({})
export const Mobile = TemplateMobile.bind({})
