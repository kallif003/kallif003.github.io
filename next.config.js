/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "/",
	},
	compiler: {
		styledComponents: true,
	},
}
