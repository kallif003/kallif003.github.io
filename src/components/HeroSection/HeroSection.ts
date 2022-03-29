import tw from "tailwind-styled-components"
import Image from "next/image"

export const HeroSection = tw.div`
	xl:w-[1055px]
	mt-[16px]
	rounded-[20px]
	py-10
	sm:w-[300px]
	lg:w-[850px]
	md:w-[350px]
    flex
	flex-col
	items-center
`
export const Imagem = tw(Image)`
	rounded-[5px]
`
