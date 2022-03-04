module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				bg: "#171718",
				yellow: "#f9b53a",
				hover: "#3d3d3d",
				pink: "#ff59ab",
				orange: "#fc8771",
				borders: "#26292d",
				heroYellow: "#EFB72B",
				heroPurple: "#9000FF",
				heroRed: "#C2273A",
				rellenos: "#1c1e22",
			},
		},
		screens: {
			sm: { min: "260px", max: "767px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: "768px", max: "1023px" },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: { min: "1024px", max: "1279px" },
			// => @media (min-width: 1024px) { ... }

			xl: { min: "1280px", max: "1535px" },
			// => @media (min-width: 1280px) { ... }

			"2xl": { min: "1536px" },
			// => @media (min-width: 1536px) { ... }

			mini: { min: "260px", max: "300px" },
			// => @media (min-width: 260px and max-width: 300px) { ... }

			M: { min: "500px", max: "720px" },
			// => @media (min-width: 540px and max-width: 720px) { ... }
		},

		fontFamily: {
			sans: ["Dm sans"],
		},
		backgroundSize: { "100%": "100%" },
	},
	plugins: [],
}
