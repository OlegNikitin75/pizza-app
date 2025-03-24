import { cn } from '@/lib/utils'
import { CheckIcon } from 'lucide-react'
import { FC } from 'react'

interface IIngredientProps {
	className?: string
	imageUrl: string
	name: string
	price: number
	active?: boolean
	onClick?: () => void
}

export const PizzaIngredient: FC<IIngredientProps> = ({
	className,
	imageUrl,
	name,
	price,
	active,
	onClick
}) => {
	return (
		<div
			className={cn(
				'relative flex items-center flex-col justify-between p-1 rounded-md w-32 cursor-pointer shadow-md bg-white',
				{ 'border border-app-primary': active },
				className
			)}
		>
			{active && (
				<CheckIcon className='absolute top-2 right-2 w-6 h-6 text-app-primary' />
			)}
			<img
				src={imageUrl}
				alt={name}
				width={110}
				height={110}
				className='bg-white'
			/>
			<div className='flex flex-col gap-1 items-center'>
				<span className='text-sm'>{name}</span>
				<span className='font-semibold'>{price} p.</span>
			</div>
		</div>
	)
}
