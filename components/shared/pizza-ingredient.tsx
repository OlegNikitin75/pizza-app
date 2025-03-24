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
			onClick={onClick}
			className={cn(
				'relative flex items-center flex-col justify-between p-1 rounded-md  flex-grow cursor-pointer shadow-md bg-white opacity-60 hover:opacity-100 border border-white',
				{  'border-app-primary opacity-100': active },
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
				className='bg-white '
			/>
			<div className='flex flex-col gap-1 items-center'>
				<span className='text-sm'>{name}</span>
				<span className='font-semibold'>{price} pуб.</span>
			</div>
		</div>
	)
}
