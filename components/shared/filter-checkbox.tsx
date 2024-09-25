'use client'

import { FC, ReactNode, useId } from 'react'

import { Checkbox } from '../ui/checkbox'

export interface IFilterCheckboxProps {
	text: string
	value: string
	endAdornment?: ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox: FC<IFilterCheckboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked
}) => {
	const id = useId()
	return (
		<div className='flex items-center gap-x-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='w-6 h-6 rounded-md'
				id={id}
			/>
			<label htmlFor={id} className='cursor-pointer flex-1'>
				{text}
			</label>
			{endAdornment}
		</div>
	)
}
