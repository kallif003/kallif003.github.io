/* eslint-disable no-unused-vars */
import React from "react"
import { createContext } from "react"
import { useRouter } from "next/router"
import { createClient } from "../../prismicio"

export const AuthContext = createContext({})

let post: any = []

function AuthProvider({ children }: any) {
	const router = useRouter()

	async function getPost(slug: string, route: string) {
		const client = createClient()

		post = await client.getByUID("my-blog", slug)

		if (route !== "") {
			router.push(route)
		}
	}
	return (
		<AuthContext.Provider value={{ getPost, post }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
