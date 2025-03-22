'use client'
import { cn } from '@/lib/utils'
import { FC } from 'react'

type Variant = {
	name: string
	value: string
	disabled?: boolean
}

interface IVariantsSelectorProps {
	items: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	className?: string
	selectedValue?: Variant['value']
}

export const VariantsSelector: FC<IVariantsSelectorProps> = ({
	items,
	onClick,
	className,
	selectedValue
}) => {
	return (
		<div
			className={cn(
				className,
				'flex justify-between select-none rounded-md p-1 bg-app-line-gray'
			)}
		>
			{items.map(item => (
				<button
					key={item.value}
					onClick={() => onClick?.(item.value)}
					className={cn(
						'flex items-center justify-center rounded-md p-1 text-app-black text-sm cursor-pointe px-5 bg-white/50',
						{
							'bg-white shadow ': item.value === selectedValue,
							'text-app-gray-text opacity-50 pointer-events-none': item.disabled
						}
					)}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
