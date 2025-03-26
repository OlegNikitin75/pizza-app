'use client'

import { useFiltersState } from '@/hooks/use-filters-state'
import { useIngredients } from '@/hooks/use-ingredients'
import { useQueryFilters } from '@/hooks/use-query-filters'

import { CheckboxFiltersGroup, H3, RangeSlider } from '.'
import { Input } from '../ui'

export const Filters = () => {
	const { ingredients, loading } = useIngredients()

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

	return (
		<div>
			<div className='md:mt-5 flex flex-col justify-between gap-y-4'>
				<div className=' w-[95%]'>
					<H3 className='mb-2'>Цена от и до:</H3>
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
				<div className='space-y-3 f'>
					<H3>Размеры:</H3>
					<CheckboxFiltersGroup
						name='sizes'
						onClickCheckbox={filters.setSizes}
						selected={filters.sizes}
						loading={loading}
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
				<div className='space-y-3 '>
					<H3>Тип теста:</H3>
					<CheckboxFiltersGroup
						name='types'
						onClickCheckbox={filters.setTypes}
						selected={filters.types}
						loading={loading}
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
				<div>
					<H3 className='mb-2'>Ингридиенты:</H3>
					<CheckboxFiltersGroup
						items={items}
						onClickCheckbox={filters.setIngredients}
						selected={filters.selectedIngredients}
						name='ingredients'
						loading={loading}
						className='mt-5'
					/>
				</div>
			</div>
		</div>
	)
}
