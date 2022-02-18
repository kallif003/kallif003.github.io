import type { NextPage } from "next"
import React from "react"
import Image from "next/image"
import CV from "../../../assets/Image/CV.png"
import Icon from "@mdi/react"
import { mdiDownload } from "@mdi/js"
import { Button1 } from "../../components/Buttons"
import { Body1 } from "../../components/Typography"
import JSPDF from "jspdf"
import html2canvas from "html2canvas"

const Curriculo: NextPage = () => {
	const downloadCV = () => {
		html2canvas(document.querySelector("#app") as HTMLCanvasElement).then(
			(canvas) => {
				const img = canvas.toDataURL("image/png")
				const pdf = new JSPDF("portrait", "mm", "a4")
				pdf.addImage(img, "PNG", 5, 5, 200, 287)
				pdf.save("Kallif Abrahão.pdf")
			}
		)
	}
	return (
		<div className="flex flex-col items-center pt-10 mx-2">
			<div className="flex flex-col items-center">
				<Image src={CV} alt="CV" width={1000} height={1000} id="app" />
				<Button1
					className="flex flex-row justify-center items-center self-end mt-5  space-x-2 mb-10 "
					onClick={downloadCV}>
					<Icon
						path={mdiDownload}
						title="User Profile"
						size="20px"
						color="#fff"
					/>
					<Body1>Download CV</Body1>
				</Button1>
			</div>
		</div>
	)
}

export default Curriculo
