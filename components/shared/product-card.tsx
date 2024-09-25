import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { Button } from '../ui'
import { Heading } from './heading'

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
			className=' rounded-xl bg-white p-2 max-w-[320px] inline-block'
			href={`/product/${id}`}
		>
			<div className='w-48 h-48 mx-auto'>
				<Image width={300} height={300} src={imageUrl} alt={name} />
			</div>
			<div className='p-3'>
				<Heading text={name} size='sm' className='font-bold' />
				<p>Ингридиенты пиццы</p>
				<div className='flex justify-between items-center mt-4'>
					<Button variant='secondary' size='sm'>Выбрать</Button>
					<span>
						от <span className='text-xl font-bold'>{price} р.</span>
					</span>
				</div>
			</div>
		</Link>
	)
}
