'use client'
import { FC, useState } from 'react'

import { CheckboxFiltersGroup, FilterCheckbox, Heading, RangeSlider } from '.'
import { Button, Input } from '../ui'

interface IFiltersProps {}

export const Filters: FC<IFiltersProps> = ({}) => {
	const [showFilters, setShowFilters] = useState(false)
	return (
		<div className=' sm:space-y-10 '>
			<Button onClick={() => setShowFilters(!showFilters)} className='w-full text-lg'>
				{showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
			</Button>
			{
				showFilters && (<div className='mt-5 space-y-6'>
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
							defaultItems={[
								{ text: 'Сырный соус', value: '1' },
								{ text: 'Моцарелла', value: '2' },
								{ text: 'Чеснок', value: '3' },
								{ text: 'Соленые огурчики', value: '4' },
								{ text: 'Красный лук', value: '5' },
								{ text: 'Томаты', value: '6' }
							]}
							items={[
								{ text: 'Сырный соус', value: '1' },
								{ text: 'Моцарелла', value: '2' },
								{ text: 'Чеснок', value: '3' },
								{ text: 'Соленые огурчики', value: '4' },
								{ text: 'Красный лук', value: '5' },
								{ text: 'Томаты', value: '6' }
							]}
						/>
					</div>
				</div>)
			}
			
		</div>
	)
}
