import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Header from "./Header"

export default {
	title: "Organismo/Header",
	component: Header,
} as ComponentMeta<typeof Header>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />
export const Default = Template.bind({})
export const Second = Template.bind({})
