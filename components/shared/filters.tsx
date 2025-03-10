'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { Button, Input } from '../ui'

interface IPropsInputRange {
	priceFrom: number
	priceTo: number
}

export const Filters = () => {
	const { ingredients, onAddId, selectedIngredients } = useFilterIngredients()

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set([]))
	const [types, { toggle: toggleTypes }] = useSet<string>(new Set([]))

	const [showFilters, setShowFilters] = useState(false)

	const [{ priceFrom, priceTo }, setPriceRange] = useState<IPropsInputRange>({
		priceFrom: 0,
		priceTo: 200
	})

	const updatePrice = (name: keyof IPropsInputRange, value: number) => {
		setPriceRange(prev => ({ ...prev, [name]: value }))
	}

	return (
		<div className=' sm:space-y-10 '>
			<Button
				onClick={() => setShowFilters(!showFilters)}
				className='bg-app-primary w-full text-lg text-white'
			>
				{showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
			</Button>
			{showFilters && (
				<div className='mt-5 space-y-6'>
					<div className='space-y-3'>
						<H3>Размеры:</H3>
						<CheckboxFiltersGroup
							name='sizes'
							onClickCheckbox={toggleSizes}
							selected={sizes}
							items={[
								{
									text: '20 см',
									value: '20'
								},
								{
									text: '30 см',
									value: '30'
								},
								{
									text: '40 см',
									value: '40'
								}
							]}
						/>
					</div>
					<div className='space-y-3'>
						<H3>Тип теста:</H3>
						<CheckboxFiltersGroup
							name='types'
							onClickCheckbox={toggleTypes}
							selected={types}
							items={[
								{
									text: 'Тонкое',
									value: '1'
								},
								{
									text: 'Традиционное',
									value: '2'
								}
							]}
						/>
					</div>

					<div className='w-[90%]'>
						<p className='font-semibold mb-3'>Цена от и до:</p>
						<div className='flex justify-between gap-x-4 mb-2'>
							<Input
								type='number'
								placeholder='0'
								min={0}
								max={200}
								value={String(priceFrom)}
								onChange={e => updatePrice('priceFrom', Number(e.target.value))}
							/>
							<Input
								type='number'
								placeholder='200'
								min={10}
								max={200}
								value={String(priceTo)}
								onChange={e => updatePrice('priceTo', Number(e.target.value))}
							/>
						</div>
						<RangeSlider
							min={0}
							max={200}
							step={1}
							value={[priceFrom, priceTo]}
							onValueChange={([priceFrom, priceTo]) =>
								setPriceRange({ priceFrom, priceTo })
							}
						/>
					</div>
					<div>
						<p className='font-semibold mb-3'>Ингридиенты:</p>
						<CheckboxFiltersGroup
							limit={5}
							defaultItems={items.slice(0, 6)}
							items={items}
							onClickCheckbox={onAddId}
							selected={selectedIngredients}
							name='ingredients'
						/>
					</div>
				</div>
			)}
		</div>
	)
}
