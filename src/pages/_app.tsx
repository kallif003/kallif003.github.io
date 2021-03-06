import type { AppProps } from "next/app"
import React from "react"
import "../styles/index.css"
import "@fontsource/dm-sans"
import Link from "next/link"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { linkResolver, repositoryName } from "../../prismicio"

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<PrismicProvider
			linkResolver={linkResolver}
			internalLinkComponent={({ href, children, ...props }) => (
				<Link href={href}>
					<a {...props}>{children}</a>
				</Link>
			)}>
			<PrismicPreview repositoryName={repositoryName}>
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	)
}

export default MyApp
