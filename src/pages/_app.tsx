import type { AppProps } from "next/app"
import React from "react"
import "../styles/index.css"

const MyApp = function ({ Component, pageProps }: AppProps) {
	console.log("editado")
	return <Component {...pageProps} />
}

export default MyApp
