module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bege: "#fff8dc",
				fundo: "#171718",
				yellow: "#f9b53a",
				hover: "#3d3d3d",
				pink: "#ff59ab",
				orange: "#fc8771",
			},
		},
		screens: {
			sm: { min: "280px", max: "640px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: "768px", max: "1023px" },
			// => @media (min-width: 768px) { ... }

			lg: { min: "1024px", max: "1279px" },
			// => @media (min-width: 1024px) { ... }

			xl: { min: "1280px", max: "1535px" },
			// => @media (min-width: 1280px) { ... }

			"2xl": { min: "1536px" },
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			bg: "#171718A6",
			hover: "#3d3d3d",
			white: "#fff",
			golden: "#f9b53a",
		},
	},
	plugins: [],
}
