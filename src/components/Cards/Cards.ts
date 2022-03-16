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
	h-[300px]
	w-[354px]
	top-[0.045px]
	rounded-[8px]
	py-[10px]
	px-[24px]
	bg-[#1f1f21]
	mx-3
	mini:w-[250px]
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
	md: mb-[20px]
	mini:w-[250px]

`
export const AreaAboutMe = tw.div`
	h-[453px]
	w-[967px]
	left-[64px]
	top-[216px]
	rounded-[8px]
	p-[24px]
	bg-[#1f1f21]
	flex
	flex-row
	
	mini:h-[980px]
	md:flex-col
	md:h-[993px]
	md:w-[328px]
	md:p-[16px]

	sm:flex-col
	sm:h-[993px]
	sm:w-[328px]
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
	w-auto
	my-5
	xl:pl-5
	
`
