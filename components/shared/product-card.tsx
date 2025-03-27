import { Ingredient } from '@prisma/client'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import { H3, P } from '.'
import { Button } from '../ui'
import { getIngredientsList } from '@/lib/get-ingredients-list'

interface IProductCardProps {
	id: number
	name: string
	price: number
	imageUrl: string
	ingredients: Ingredient[]
	className?: string
}

export const ProductCard: FC<IProductCardProps> = ({
	id,
	name,
	price,
	imageUrl,
	ingredients,
}) => {


	return (
		<Link
			className='rounded-xl bg-white p-2 w-full sm:h-[414px] sm:w-[234px]
			 2xl:w-[246px] inline-flex justify-between flex-col items-center'
			href={`/product/${id}`}
		>
			<img width={300} height={300} src={imageUrl} alt={name} />
			<div className='flex-1 p-3 flex flex-col justify-between w-full'>
				<div>
					<H3>{name}</H3>
					<P className='line-clamp-3'>{getIngredientsList(ingredients)}</P>
				</div>

				<div className='flex justify-between items-center mt-4'>
					<Button variant='secondary' size='sm'>
						<span className='hidden sm:inline-block'>Выбрать</span>
						<span className='sm:hidden'>
							<Plus size={16} />
						</span>
					</Button>
					<span>
						{imageUrl.includes('pizza') ? (
							<>
								<span className='pr-2'>от</span>
								<span className='font-bold'>{price} руб.</span>
							</>
						) : (
							<span className='font-bold'>{price} руб.</span>
						)}
					</span>
				</div>
			</div>
		</Link>
	)
}
