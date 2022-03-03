import tw from "tailwind-styled-components"
import Image from "next/image"

export const HeroSection = tw.div`
	w-[1155px]
	mt-[16px]
	mb-[16px]
	rounded-[20px]
    mx-auto

	mini: pt-20

	sm:w-auto
	sm:m-[10px]
	sm:h-200px

	md:w-auto
	md:m-[10px]
	md:h-200px

	lg:w-auto
	lg:m-[10px]
	lg:h-[300px]
	lg:pt-10
`
export const Container = tw.div`
	mx-auto
	w-[30rem]
	
	sm:w-[200px]
	sm:h-[180px]

	md:w-[350px]
	md:h-[250px]

	lg:w-[300px]

	mini:w-[200px]
	mini:h-[170px]
`
export const Imagem = tw(Image)`
	rounded-[5px]
	lg:h-[200px]
`
