'use client'

import { ChangeEvent, FC, useState } from 'react'

import { Input } from '../ui'
import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox'

type Item = IFilterCheckboxProps

interface ICheckboxFiltersGroupProps {
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
	className?: string
}

export const CheckboxFiltersGroup: FC<ICheckboxFiltersGroupProps> = ({
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	onChange,
	defaultValue,
	className
}) => {
	const [openAll, setOpenAll] = useState(false)
	const [searchValue, setSearchValue] = useState('')
	const listItems = openAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
			)
		: defaultItems.slice(0, limit)
	const setSearchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}
	return (
		<div className='space-y-5'>
			{openAll && (
				<div>
					<Input
						onChange={setSearchInputValue}
						placeholder={searchInputPlaceholder}
						className='bg-app-line-gray border-none '
					/>
				</div>
			)}

			<div className='flex flex-col max-h-80 overflow-auto scrollbar gap-y-4 pr-2'>
				{listItems.map(item => (
					<FilterCheckbox
						key={String(item.value)}
						text={item.text}
						onCheckedChange={() => {}}
						//onCheckedChange={() => onCheckedChange(item.value)}
						// checked={selected.has(item.value)}
						checked={false}
						value={item.value}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>
			{items.length > limit && (
				<button
					onClick={() => setOpenAll(!openAll)}
					className='text-app-primary font-semibold py-2'
				>
					{openAll ? '- показать все' : '+ показать все'}
				</button>
			)}
		</div>
	)
}
