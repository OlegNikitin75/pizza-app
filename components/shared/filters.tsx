'use client'

import { useFilterIngredients } from '@/hooks/useFilterIngredients'
import { useState } from 'react'

import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '.'
import { Button, Input } from '../ui'

export const Filters = () => {
	const { ingredients,onAddId, selectedIds } = useFilterIngredients()
	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name
	}))

	const [showFilters, setShowFilters] = useState(false)
	return (
		<div className=' sm:space-y-10 '>
			<Button
				onClick={() => setShowFilters(!showFilters)}
				className='w-full text-lg'
			>
				{showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
			</Button>
			{showFilters && (
				<div className='mt-5 space-y-6'>
					<div className='flex flex-col gap-y-4'>
						<FilterCheckbox text='Доступно для сборки' value='1' />
						<FilterCheckbox text='Новинки' value='2' />
					</div>
					<div className='w-[90%]'>
						<p className='font-semibold mb-3'>Цена от и до:</p>
						<div className='flex justify-between gap-x-4 mb-2'>
							<Input
								type='number'
								placeholder='0'
								min={0}
								max={200}
								defaultValue={0}
							/>
							<Input type='number' placeholder='200' min={10} max={200} />
						</div>
						<RangeSlider min={0} max={200} step={1} value={[0, 200]} />
					</div>
					<div>
						<p className='font-semibold mb-3'>Ингридиенты:</p>
						<CheckboxFiltersGroup
							limit={5}
							defaultItems={items.slice(0, 6)}
							items={items}
							onClickCheckbox={onAddId}
							selectedIds={selectedIds}
						/>
					</div>
				</div>
			)}
		</div>
	)
}
