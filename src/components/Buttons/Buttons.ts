import tw from "tailwind-styled-components"
import styled from "styled-components"

export const Button1 = tw.button`
	h-[48px]
	w-[169px]
	left-[16px]
	top-[16px]
	rounded-[8px]
	py-[12px]
	px-[16px]
	bg-yellow
	font-['sans']
	
`

export const Button3 = tw.button`
	h-[48px]
	w-[218px]
	left-[16px]
	top-[16px]
	rounded-[8px]
	py-[12px]
	px-[16px]
	bg-yellow
	text-white
	font-['sans']	
`

export const Button5 = tw.button`
	h-[48px]
	w-[328px]
	left-[16px]
	top-[144px]
	rounded-[8px]
	py-[12px]
	px-[16px]
	bg-yellow
	text-white
	font-['sans']
	md:w-[215px]
	mini:w-[250px]

`

export const Button7 = tw.button`
	h-[48px]
	w-[172px]
	left-[16px]
	top-[16px]
	rounded-[8px]
	py-[12px]
	px-[16px]
	text-white
	font-['sans']
	border-solid
	border
	border-white
`

export const Button8 = tw.button`
    h-[48px]
	w-[198px]
	left-[16px]
	top-[16px]
	rounded-[8px]
	py-[12px]
	px-[16px]
	text-white
	font-['sans']
	border-solid
	border
	border-white

`
export const Ul = tw.ul`
    grid
	grid-flow-col
	gap-2
	font-['sans']
	list-none
`
export const Li = tw.li`
	pl-3
	rounded-2
`
export const Ancora = tw.a`
    no-underline
	hover:underline decoration-yellow underline-offset-8
		
`
export const Button2 = styled.button`
	//ver projeto, botão gradiente
	height: 48px;
	width: 169px;
	left: 16px;
	top: 80px;
	border-radius: 8px;
	padding: 16px, 20px, 16px, 20px;
	background: linear-gradient(270deg, #f9b53a 10.81%, #ff59a8 100%);
	color: #fff;
	font-family: DM sans;
`
export const Button6 = styled.button`
	//botão grande gradiente
	height: 48px;
	width: 328px;
	left: 16px;
	top: 208px;
	border-radius: 8px;
	padding: 16px, 20px, 16px, 20px;
	background: linear-gradient(270deg, #f9b53a 10.81%, #ff59a8 100%);
	color: #fff;
	font-family: DM sans;
`
export const Button4 = styled.button`
	//botão medio gradiente
	height: 48px;
	width: 218px;
	left: 16px;
	top: 80px;
	border-radius: 8px;
	padding: 16px, 20px, 16px, 20px;
	background: linear-gradient(270deg, #f9b53a 10.81%, #ff59a8 100%);
	color: #fff;
	font-family: DM sans;
`
