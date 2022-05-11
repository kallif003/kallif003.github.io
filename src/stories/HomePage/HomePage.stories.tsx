import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import HomePage from "../../pages/HomePage/HomePage"
interface IPosts {
	slug: string
	title: string
	description: string
	image: string
}

interface HomePosts {
	posts: IPosts[]
}
export default {
	title: "Prototipo/HomePage",
	component: HomePage,
} as ComponentMeta<typeof HomePage>

// eslint-disable-next-line no-unused-vars
const Template: ComponentStory<typeof HomePage> = ({ posts }: HomePosts) => (
	<div>
		<HomePage posts={posts} />
	</div>
)

export const Desktop = Template.bind({})
