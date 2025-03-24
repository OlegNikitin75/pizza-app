'use client'

import {
	PizzaSize,
	pizzaSizesOptions,
	PizzaType,
	pizzaTypesOptions
} from '@/constants/pizza'
import { Ingredient } from '@prisma/client'
import { FC, useState } from 'react'

import { H3, P, PizzaImage, PizzaIngredient, VariantsSelector } from '.'
import { Button } from '../ui'

interface IProductForm {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
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

	const [size, setSize] = useState<PizzaSize>(20)
	const [type, setType] = useState<PizzaType>(1)
	return (
		<div className='flex justify-between flex-col md:flex-row'>
			<PizzaImage src={imageUrl} alt={name} size={size}                      />
			<div className='flex-1 bg-app-line-gray p-6'>
				<H3>{name}</H3>
				<P>{textDetails}</P>
				<div className='space-y-1 md:space-y-3'>
					<VariantsSelector
						items={pizzaSizesOptions}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<VariantsSelector
						items={pizzaTypesOptions}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>
				<div className='rounded-md bg-white p-2 md:p-5 shadow-md h-40 md:h-80 mt-2 sm:mt-4 overflow-auto scrollbar'>
					<div className='flex flex-wrap gap-4 justify-center'>
						{ingredients.map(ingredient => (
							<PizzaIngredient
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								active={true}
								onClick={() => console.log('click')}
							/>
						))}
					</div>
				</div>

				<Button className='bg-app-primary h-11 px-10 rounded-md w-full text-white mt-10'>
					Добавить в корзину
				</Button>
			</div>
		</div>
	)
}
