/** @type {import('next').NextConfig} */
module.exports = {
	swcMinify: false,
	reactStrictMode: true,
	images: {
		domains: ["images.prismic.io"],
		formats: ["image/webp"],
		loader: "akamai",
		path: "",
	},
	compiler: {
		styledComponents: true,
	},
}
