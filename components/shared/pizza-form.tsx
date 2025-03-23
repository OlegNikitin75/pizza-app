import { FC } from 'react'

import { H3, P, PizzaImage } from '.'
import { Button } from '../ui'

interface IProductForm {
	imageUrl: string
	name: string
	ingredients: any
	items: any
	onClickAdd?: VoidFunction
}

export const PizzaForm: FC<IProductForm> = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAdd
}) => {
	const textDetails = '30 см, традиционное тесто, 590 г.'
	return (
		<div className='flex justify-between'>
		<PizzaImage src={imageUrl} alt={name} size={20} />
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
