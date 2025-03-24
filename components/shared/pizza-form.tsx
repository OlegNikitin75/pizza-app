'use client'

import {
	mapPizzaType,
	PizzaSize,
	pizzaSizesOptions,
	PizzaType,
	pizzaTypesOptions
} from '@/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'
import { FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { H3, P, PizzaImage, PizzaIngredient, VariantsSelector } from '.'
import { Button } from '../ui'

interface IProductForm {
	imageUrl: string
	name: string
	ingredients: Ingredient[]
	items: ProductItem[]
	onClickAddToCart?: VoidFunction
}

export const PizzaForm: FC<IProductForm> = ({
	imageUrl,
	name,
	ingredients,
	items,
	onClickAddToCart
}) => {
	const [size, setSize] = useState<PizzaSize>(20)
	const [type, setType] = useState<PizzaType>(1)

	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)

	const availablePizzas = items.filter(item => item.pizzaType !== type)
	const availablePizzaSizes = pizzaSizesOptions.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !availablePizzas.some(
			pizza => Number(pizza.size) === Number(item.value)
		)
	}))
	useEffect(() => {
		const isAvailableSize = availablePizzaSizes?.find(
			item => Number(item.value) === size && !item.disabled
		)
		const availablePrimarySize = availablePizzaSizes?.find(
			item => !item.disabled
		)
		if (!isAvailableSize && availablePrimarySize)
			setSize(Number(availablePrimarySize.value) as PizzaSize)
	}, [availablePizzaSizes, size])

	const pizzaPrice =
		items.find(item => item.pizzaType === type && item.size === size)?.price ||
		0
		
	console.log(pizzaPrice)

	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	const totalPizzaPrice = pizzaPrice + totalIngredientsPrice

	const handleClick = () => {
		onClickAddToCart?.()
	}
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`

	return (
		<div className='flex justify-between flex-col md:flex-row'>
			<PizzaImage src={imageUrl} alt={name} size={size} />
			<div className='flex-1 bg-app-line-gray p-6'>
				<H3 className='md:text-2xl'>{name}</H3>
				<P className='text-base text-app-gray-text font-semibold'>
					{textDetails}
				</P>
				<div className='space-y-1 md:space-y-3'>
					<VariantsSelector
						items={availablePizzaSizes}
						value={String(size)}
						onClick={value => setSize(Number(value) as PizzaSize)}
					/>
					<VariantsSelector
						items={pizzaTypesOptions}
						value={String(type)}
						onClick={value => setType(Number(value) as PizzaType)}
					/>
				</div>
				<H3 className='mt-2'>Добавить по вкусу</H3>
				<div className='rounded-md bg-white p-2 md:p-5 shadow-md h-44 md:h-80 mt-2  overflow-auto scrollbar'>
					<div className='flex flex-wrap gap-4 justify-center'>
						{ingredients.map(ingredient => (
							<PizzaIngredient
								key={ingredient.id}
								imageUrl={ingredient.imageUrl}
								name={ingredient.name}
								price={ingredient.price}
								active={selectedIngredients.has(ingredient.id)}
								onClick={() => addIngredient(ingredient.id)}
							/>
						))}
					</div>
				</div>

				<div className='space-y-4'>
					<P className='mt-10'>
						Итоговая стоимость:{' '}
						<span className='font-bold text-lg'>{totalPizzaPrice} руб.</span>
					</P>
					<Button
						onClick={handleClick}
						className='bg-app-primary h-11 px-10 rounded-md w-full text-white'
					>
						Добавить в корзину
					</Button>
				</div>
			</div>
		</div>
	)
}
