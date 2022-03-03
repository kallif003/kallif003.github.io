import tw from "tailwind-styled-components"
import Image from "next/image"

export const ContainerCards = tw.div`
	flex
	flex-row
	justify-around
	h-auto
	pb-[20px]
	pt-2
	px-2
	items-center
	sm:flex-col 
	md:flex-col 	
`
export const Cards = tw.div`
	h-auto
	w-[354px]
	left-[0px]
	top-[0.045px]
	rounded-[8px]
	py-[10px]
	px-[24px]
	bg-[#1f1f21]
	mx-3
	mini:w-auto
	sm:mb-[10px]
	md:mb-2
	lg:mb-[20px] 
	lg:w-[200px]
`
export const Logo = tw(Image)`
	100%
	inline-block
`
export const WorkTools = tw.div`
	h-[363px]
	w-[354px]
	left-[16.5px]
	top-[19px]
	rounded-[8px]
	border-solid
	border
	border-[#3d3d3d]
	md: mg-[20px]

`
export const AreaAboutMe = tw.div`
	h-[453.1620178222656px]
	w-[967px]
	left-[64px]
	top-[216px]
	rounded-[8px]
	p-[24px]
	bg-[#1f1f21]
	flex
	flex-row

	md:flex-col
	md:h-[993px]
	md:w-[328px]
	md:left-[0px]
	md:top-[0px]
	md:p-[16px]

	sm:flex-col
	sm:h-[993px]
	sm:w-[328px]
	sm:left-[0px]
	sm:top-[0px]
	sm:p-[16px]
	
	mini:w-[260px]
	mini:flex-col
	mini:h-[900px]
	
`
export const ImageAboutMe = tw(Image)`
	h-[405px]
	w-[326px]
	left-[24px]
	top-[24px]
	rounded-[8px]
	bg-yellow
`
export const AreaTextAboutMe = tw.div`
	h-[333px]
	w-[560px]
	left-[0px]
	top-[0px]
	pl-12
	text-white

	md:pl-0
	md:w-auto
	mini:w-auto

	mini:pl-0
	mini:mt-4

	sm:w-auto
	sm:px-10
	sm:mt-4
	
`
