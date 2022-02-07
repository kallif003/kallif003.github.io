import styled from "styled-components"
import Image from "next/image"

export const HeroSection = styled.div`
	height: 534px;
	width: 1155px;
	margin-top: 16px;
	margin-bottom: 16px;
	padding-top: 7rem;
	border-radius: 20px;
	background-color: ${({ color }) => color};
	margin-left: auto;
	margin-right: auto;
`
export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	width: 30rem;
`
export const Imagem = styled(Image).attrs((props) => ({
	width: props.width,
	height: props.height,
	quality: props.quality,
}))`
	border-radius: 10px 40px 5px;
`
