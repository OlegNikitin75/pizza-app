'use client'

import {
	mapPizzaType,
	PizzaSize,
	pizzaSizesOptions,
	PizzaType,
	pizzaTypesOptions
} from '@/constants/pizza'
import { getIngredientsList } from '@/lib/get-ingredients-list'
import { Ingredient, ProductItem } from '@prisma/client'
import { FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { H3, P, PizzaImage, PizzaIngredient, VariantsSelector } from '.'
import { Button } from '../ui'

interface IProductForm {
	imageUrl: string
	name: string
	pizzaIngredients: Ingredient[]
	allIngredients: Ingredient[]
	items: ProductItem[]
	onClickAddToCart?: VoidFunction
}

export const PizzaForm: FC<IProductForm> = ({
	imageUrl,
	name,
	pizzaIngredients,
	allIngredients,
	items,
	onClickAddToCart
}) => {
	const [size, setSize] = useState<PizzaSize>(30)
	const [type, setType] = useState<PizzaType>(2)

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

	const pizzaPrice = items.find(item => item.size === size)?.price || 0

	const totalIngredientsPrice = allIngredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	const totalPizzaPrice = (pizzaPrice + totalIngredientsPrice).toFixed(2)

	const handleClick = () => {
		onClickAddToCart?.()
	}
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`
	console.log(items)
	return (
		<div className='flex justify-between flex-col md:flex-row'>
			<PizzaImage src={imageUrl} alt={name} size={size} />
			<div className='flex-1 bg-app-line-gray p-6'>
				<H3 className='md:text-2xl'>{name}</H3>
				<P className='text-base text-app-gray-text font-semibold'>
					{textDetails}
				</P>
				<P className='md:text-sm text-app-gray-text'>{getIngredientsList(pizzaIngredients)}</P>
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
				<div className='rounded-md bg-white p-2 md:p-5 shadow-md h-44 md:h-[260px] 2xl:h-80 mt-2  overflow-auto scrollbar'>
					<div className='flex flex-wrap gap-4 justify-center'>
						{allIngredients.map(ingredient => (
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

				<Button
					onClick={handleClick}
					className='bg-app-primary h-11 px-10 rounded-md w-full text-white mt-10'
				>
					Добавить в корзину за{' '}
					<span className='px-2 text-lg font-bold'>{totalPizzaPrice}</span> руб.
				</Button>
			</div>
		</div>
	)
}
