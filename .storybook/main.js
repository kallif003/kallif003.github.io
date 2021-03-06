module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-postcss",
		"storybook-css-modules-preset",
	],
	framework: "@storybook/react",
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
		})
		return config
	},
}
