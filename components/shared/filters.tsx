

import { FC} from 'react'

import { CheckboxFiltersGroup, FilterCheckbox, Heading, RangeSlider } from '.'
import { Input } from '../ui'

interface IFiltersProps {}

export const Filters: FC<IFiltersProps> = ({}) => {
	
	return (
		<div className='space-y-10'>
			<Heading text='Все фильтры' size='sm' className='mb-4 font-semibold' />
			<div className='flex flex-col gap-y-4'>
				<FilterCheckbox text='Доступно для сборки' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>
			<div>
				<p className='font-semibold mb-3'>Цена от и до:</p>
				<div className='flex justify-between'>
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
		</div>
	)
}
