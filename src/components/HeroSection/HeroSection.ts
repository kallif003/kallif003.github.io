import styled from "styled-components"
import Image from "next/image"

export const HeroSection = styled.div`
	width: 1155px;
	margin-top: 16px;
	margin-bottom: 16px;
	border-radius: 20px;
	background-color: ${({ color }) => color};
	margin-left: auto;
	margin-right: auto;
	@media (max-width: 950px) {
		width: auto;
		margin: 10px;
		height: 200px;
	}
	@media (max-width: 1050px) {
		width: auto;
		margin: 10px;
		height: 300px;
		padding-top: 2.5rem;
	}
	@media (max-width: 280px) {
		padding-top: 5rem;
	}
`
export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 30rem;
	position: relative;

	@media (max-width: 950px) {
		width: 200px;
		height: 200px;
	}
	@media (max-width: 1050px) {
		width: 300px;
	}
	@media (max-width: 280px) {
		width: 200px;
		height: 170px;
	}
`
export const Imagem = styled(Image)`
	border-radius: 5px;
	@media (max-width: 1050px) {
		height: 200px;
	}
`
