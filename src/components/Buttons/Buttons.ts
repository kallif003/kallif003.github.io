import tw from "tailwind-styled-components"

export const Button1 = tw.button`
	relative
	w-[169px]
	h-[48px]
	py-[10px]
	px-[20px]
	bg-yellow
	rounded-tr
	rounded-bl
	duration-500
	active:scale-95
	hover:border-white
	hover:border-solid
	hover:border
`

export const Button2 = tw.button`
	h-[48px]
	w-[328px]
	rounded-tr
	rounded-bl
	py-[12px]
	px-[16px]
	bg-yellow
	md:w-[215px]
	duration-500
	active:scale-95
	hover:border-white
	hover:border-solid
	hover:border
	sm:w-[300px]
	md:w-[340px]
	

`
export const Button3 = tw.button`
	h-[48px]
	w-[172px]
	rounded-tr
	rounded-bl
	py-[12px]
	px-[16px]
	border-solid
	border
	border-white
	hover:border-yellow
	active:scale-95
	duration-700
	

`
export const Button4 = tw.button`
	py-[12px]
	px-[16px]
	rounded-tr
	rounded-bl
	duration-500
	border-solid
	border
	border-white
	hover:border-yellow
	active:scale-95

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
