import type { AppProps } from "next/app"
import React from "react"
import "../styles/index.css"
import "@fontsource/dm-sans"

const MyApp = function ({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp
