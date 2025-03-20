'use client'

import { useFiltersState } from '@/hooks/use-filters-state'
import { useIngredients } from '@/hooks/use-ingredients'
import { useQueryFilters } from '@/hooks/use-query-filters'
import { useRouter } from 'next/navigation'
import qs from 'qs'
import { useEffect, useState } from 'react'

import { CheckboxFiltersGroup, H3, RangeSlider } from '.'
import { Button, Input } from '../ui'

export const Filters = () => {
	const router = useRouter()

	const { ingredients } = useIngredients()

	const filters = useFiltersState()
	useQueryFilters(filters)

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const updatePrice = (prices: number[]) => {
		filters.setPriceRange('priceFrom', prices[0])
		filters.setPriceRange('priceTo', prices[1])
	}

	const [showFilters, setShowFilters] = useState(false)

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
							onClickCheckbox={filters.setSizes}
							selected={filters.sizes}
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
							onClickCheckbox={filters.setTypes}
							selected={filters.types}
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
								max={100}
								value={String(filters.priceRange.priceFrom)}
								onChange={e =>
									filters.setPriceRange('priceFrom', Number(e.target.value))
								}
							/>
							<Input
								type='number'
								placeholder='100'
								min={10}
								max={100}
								value={String(filters.priceRange.priceTo)}
								onChange={e =>
									filters.setPriceRange('priceTo', Number(e.target.value))
								}
							/>
						</div>
						<RangeSlider
							min={0}
							max={100}
							step={1}
							value={[
								filters.priceRange.priceFrom || 0,
								filters.priceRange.priceTo || 100
							]}
							onValueChange={updatePrice}
						/>
					</div>
					<div>
						<p className='font-semibold mb-3'>Ингридиенты:</p>
						<CheckboxFiltersGroup
							limit={5}
							defaultItems={items.slice(0, 6)}
							items={items}
							onClickCheckbox={filters.setIngredients}
							selected={filters.selectedIngredients}
							name='ingredients'
						/>
					</div>
				</div>
			)}
		</div>
	)
}
