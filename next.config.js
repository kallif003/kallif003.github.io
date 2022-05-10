/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["images.prismic.io"],
		formats: ["image/webp"],
	},
	compiler: {
		styledComponents: true,
	},
}
