import { FC } from 'react'

import { H3, P } from '.'
import { Button } from '../ui'

interface IProductForm {
	imageUrl: string
	name: string
	onClickAdd?: VoidFunction
}

export const ProductForm: FC<IProductForm> = ({
	imageUrl,
	name,
	onClickAdd
}) => {
	const textDetails = '30 см, традиционное тесто, 590 г.'
	return (
		<div className='flex justify-between flex-col md:flex-row'>
			<div className='flex justify-center items-center relative flex-1 w-full'>
				<img className='relative left-2 top-2 transition-all duration-300 z-10 h-80 w-80' src={imageUrl} alt={name} />
			</div>
			<div className='flex-1 bg-app-line-gray p-6'>
				<H3>{name}</H3>
				<P>{textDetails}</P>
				<Button className='bg-app-primary h-11 px-10 rounded-md w-full text-white mt-10'>
					Добавить в корзину
				</Button>
			</div>
		</div>
	)
}
