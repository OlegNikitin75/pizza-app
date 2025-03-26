'use client'

import { cn } from '@/lib/utils'
import { ChangeEvent, FC, useState } from 'react'

import { Input, Skeleton } from '../ui'
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
	loading?: boolean
	className?: string
}

export const CheckboxFiltersGroup: FC<ICheckboxFiltersGroupProps> = ({
	items,
	searchInputPlaceholder = 'Поиск...',
	onClickCheckbox,
	selected,
	name,
	loading,
	className
}) => {
	const [searchValue, setSearchValue] = useState('')
	const listItems = items.filter(item =>
		item.text.toLowerCase().includes(searchValue.toLowerCase())
	)

	const setSearchInputValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value)
	}

	if (loading) {
		return (
			<div className={className}>
				{...Array(items.length)
					.fill(0)
					.map((_, index) => (
						<Skeleton
							key={index}
							className='h-6 mb-4 rounded-md bg-app-black/10'
						/>
					))}
			</div>
		)
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
					'h-36 2xl:h-80 overflow-y-scroll scrollbar': items.length > 5
				})}
			>
				<div
					className={cn('flex flex-row gap-4 2xl:flex-col gap-y-4 pr-2', {
						'flex-col': items.length > 5
					})}
				>
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
