import type { NextPage } from "next"
import React from "react"
import Icon from "@mdi/react"
import { mdiAccountArrowDownOutline } from "@mdi/js"

const Header: NextPage = function () {
	return (
		<div>
			<Icon
				path={mdiAccountArrowDownOutline}
				title="User Profile"
				size={1}
				horizontal
				vertical
				rotate={90}
				color="red"
				spin
			/>
		</div>
	)
}

export default Header
