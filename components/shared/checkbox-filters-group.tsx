'use client'

import { cn } from '@/lib/utils'
import { ChangeEvent, FC, useState } from 'react'

import { Input } from '../ui'
import { FilterCheckbox, IFilterCheckboxProps } from './filter-checkbox'

type Item = IFilterCheckboxProps

interface ICheckboxFiltersGroupProps {
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	selected?: Set<string>
	name?: string
}

export const CheckboxFiltersGroup: FC<ICheckboxFiltersGroupProps> = ({
	items,
	defaultItems,
	searchInputPlaceholder = 'Поиск...',
	onClickCheckbox,
	selected,
	name
}) => {
	const [searchValue, setSearchValue] = useState('')
	const listItems = items.filter(item =>
		item.text.toLowerCase().includes(searchValue.toLowerCase())
	)

	const setSearchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='py-2 sm:py-0'>
			{items.length > 5 && (
				<div className='mb-4'>
					<Input
						onChange={setSearchInputValue}
						placeholder={searchInputPlaceholder}
						className='bg-app-line-gray border-none '
					/>
				</div>
			)}
			<div
				className={cn('space-y-5', {
					'h-40 md:h-80 overflow-y-scroll scrollbar': items.length > 5
				})}
			>
				<div className={cn('flex flex-row gap-4 md:flex-col gap-y-4 pr-2',{
					'flex-col': items.length > 5
				})}>
					{listItems.map(item => (
						<FilterCheckbox
							key={String(item.value)}
							text={item.text}
							onCheckedChange={() => onClickCheckbox?.(item.value)}
							checked={selected?.has(item.value)}
							value={item.value}
							endAdornment={item.endAdornment}
							name={name}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
