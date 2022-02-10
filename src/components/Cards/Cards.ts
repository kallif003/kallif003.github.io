import styled from "styled-components"
import Image from "next/image"

export const ContainerCards = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 1112px;
	height: auto;
	padding-bottom: 20px;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`
export const Cards = styled.div`
	height: auto;
	width: 354px;
	left: 0px;
	top: 0.04559326171875px;
	border-radius: 8px;
	padding: 10px 24px;
	background: #1f1f21;
	@media (max-width: 767px) {
		margin-bottom: 20px;
	}
`

export const Logo = styled(Image)`
	background-size: 100%;
	display: inline-block;
`

export const WorkTools = styled.div`
	height: 363px;
	width: 354px;
	left: 16.5px;
	top: 19px;
	border-radius: 8px;
	border: 1px solid #3d3d3d;
	@media (max-width: 767px) {
		margin-bottom: 20px;
	}
`
export const AreaAboutMe = styled.div`
	height: 453.1620178222656px;
	width: 967px;
	left: 64px;
	top: 216px;
	border-radius: 8px;
	padding: 24px;
	background: #1f1f21;
	display: flex;
	flex-direction: row;
	@media (max-width: 767px) {
		flex-direction: column;
		height: 993px;
		width: 328px;
		left: 0px;
		top: 0px;
		border-radius: 8px;
		padding: 16px;
	}
`
export const ImageAboutMe = styled(Image)`
	height: 405.1620178222656px;
	width: 326.3250732421875px;
	left: 24px;
	top: 24px;
	border-radius: 8px;
	background: #c4c4c4;
`
export const AreaTextAboutMe = styled.div`
	height: 333px;
	width: 560px;
	left: 0px;
	top: 0px;
	border-radius: 0px;
	padding-left: 3rem;
	color: #fff;

	@media (max-width: 767px) {
		padding-left: 0px;
		width: auto;
	}
`
