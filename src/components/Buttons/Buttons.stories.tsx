import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import {
	Button1,
	Button2,
	Button3,
	Button4,
	Button5,
	Button6,
	Button7,
	Button8,
	Ul,
	Li,
	Ancora,
} from "."

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Moleculas/Buttons",
	component: Button1,
} as ComponentMeta<typeof Button1>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button1> = () => (
	<div
		style={{
			background: "#000",
			height: "200px",
			padding: "30px",
			listStyle: "none",
		}}>
		<Button1>Stories</Button1>
		<Button2>Stories</Button2>
		<Button3>Stories</Button3>
		<Button4>Stories</Button4>
		<Button5>Stories</Button5>
		<Button6>Stories</Button6>
		<Button7>Stories</Button7>
		<Button8>Stories</Button8>
		<Ul>
			<Li>
				<Ancora>Home</Ancora>
			</Li>

			<Li>
				<Ancora>Projetos</Ancora>
			</Li>

			<Li>
				<Ancora>Sobre</Ancora>
			</Li>
		</Ul>
	</div>
)

export const Default = Template.bind({})
