import tw from "tailwind-styled-components"
import Image from "next/image"

export const ContainerCards = tw.div`
	flex
	flex-row
	justify-center
	pb-[10px]
	pt-2
	sm:py-0
	md:py-0
	items-center
	sm:flex-col 
	md:flex-col 
	
	
`
export const Cards = tw.div`
	h-[300px]
	w-[330px]
	rounded-[8px]
	py-[10px]
	px-[24px]
	bg-[#1f1f21]
	
	lg:mx-2
	xl:mx-4
	sm:mb-[10px]
	sm:w-[300px]
	sm:h-[200px]
    mb-2
	lg:w-[270px]
	lg:h-[210px]
	
	
	
`
export const CardsMyBlog = tw.div`
	h-[300px]
	w-[510px]
	rounded-[8px]

	bg-[#1f1f21]
	
	lg:mx-2
	xl:mx-4
	sm:mb-[10px]
	sm:w-[300px]
	sm:h-[200px]
	md:w-[330px]
    mb-2
	lg:w-[410px]
	lg:h-[210px]
		
`
export const DivMyBlog = tw.div`
	h-[300px]
	w-[425px]

	rounded-[8px]
	
	
	bg-[#1f1f21]
	mb-10
	
	xl:mx-4
	sm:mb-[20px]
	sm:w-[300px]
	sm:h-[210px]
	
	lg:mx-2
	lg:w-[410px]
	lg:h-[285px]
`
export const Logo = tw(Image)`
	100%
	inline-block
`

export const AreaAboutMe = tw.div`
	h-[453px]
	w-[1055px]
	lg:w-[840px]
	rounded-[8px]
	p-[24px]
	bg-[#1f1f21]
	flex
	flex-row
	
	md:flex-col
	md:h-[993px]
	md:w-[328px]
	md:p-[16px]

	sm:flex-col
	sm:h-[993px]
	sm:w-[300px]
	sm:p-[16px]	
`
export const ImageAboutMe = tw(Image)`
	w-[320px]
	rounded-[8px]
	bg-yellow

`
export const AreaTextAboutMe = tw.div`
	h-[333px]
	sm:w-auto
	md:w-auto
	w-[400px]
	my-5
	xl:pl-5
	lg:pl-5
	
`
