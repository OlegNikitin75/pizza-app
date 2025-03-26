'use client'

import { cn } from '@/lib/utils'
import { FC } from 'react'

 export type Variant = {
	name: string
	value: string
	disabled?: boolean
}

interface IVariantsSelectorProps {
	items: readonly Variant[]
	onClick?: (value: Variant['value']) => void
	className?: string
	value?: Variant['value']
}

export const VariantsSelector: FC<IVariantsSelectorProps> = ({
	items,
	onClick,
	className,
	value
}) => {

console.log(value)

	return (
		<div
			className={cn(
				className,
				'flex justify-between select-none rounded-md p-1 gap-4'
			)}
		>
			{items.map(item => (
				<button
					key={item.value}
					onClick={() => onClick?.(item.value)}
					className={cn(
						'flex-1 rounded-md py-2 text-app-black text-sm cursor-pointe bg-white/50',
						{
							'bg-white shadow ': item.value === value,
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
