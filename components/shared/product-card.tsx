import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '../ui'
import { Heading } from './heading'
import { H3 } from '.'

interface IProductCardProps {
	id: string
	name: string
	price: number
	imageUrl: string
	className?: string
}

export const ProductCard: FC<IProductCardProps> = ({
	id,
	name,
	price,
	imageUrl,
	className
}) => {
	return (
		<Link
			className='rounded-xl bg-white p-2 w-[170px] sm:w-56 inline-block'
			href={`/product/${id}`}
		>
			<Image width={300} height={300} src={imageUrl} alt={name} />
			<div className='p-3'>
				<H3>{name}</H3>
				<p>Ингридиенты пиццы</p>
				<div className='flex justify-between items-center mt-4'>
					<Button variant='secondary' size='sm'>
						<span className='hidden sm:inline-block'>Выбрать</span>
						<span className='sm:hidden'>
							<Plus size={16} />
						</span>
					</Button>
					<span>
						от <span className=' text-base sm:text-xl font-bold'>{price} р.</span>
					</span>
				</div>
			</div>
		</Link>
	)
}
