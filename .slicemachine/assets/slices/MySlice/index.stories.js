import MyComponent from "../../../../slices/MySlice"

export default {
	title: "slices/MySlice",
}

export const _Default = () => (
	<MyComponent
		slice={{
			variation: "default",
			name: "Default",
			slice_type: "my_slice",
			items: [],
			primary: {
				title: [
					{
						type: "heading1",
						text: "Generate one-to-one e-markets",
						spans: [],
					},
				],
				description: [
					{
						type: "paragraph",
						text: "Eu ipsum nulla anim qui duis exercitation reprehenderit laboris. Nostrud cillum anim ex ea magna anim minim do in. Eu reprehenderit labore aliquip voluptate quis occaecat deserunt.",
						spans: [],
					},
				],
			},
			id: "_Default",
		}}
	/>
)
_Default.storyName = "Default"
