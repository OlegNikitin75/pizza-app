'use client'

import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { ProductCard } from './product-card'
import { Heading, SortPopup } from '.'

interface IProductsGroupListProps {
	title:string
	items: any[]
	className?: string
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: FC<IProductsGroupListProps> = ({
	title,
	items,
	className,
	listClassName,
	categoryId
}) => {
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})

	useEffect(() => {
		if (intersection?.isIntersecting) console.log(categoryId)
	}, [categoryId, intersection?.isIntersecting])

	return (
		<div>
			<div className='flex justify-between items-center'>
				<Heading text={title} size='2xl' className='font-semibold my-4' />
			<SortPopup/>

			</div>
			
			<div
				className={clsx('grid grid-cols-3 gap-[50px] px-4', listClassName)}
				id={title}
			>
				{items.map(item => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.items[0].price}
						imageUrl={item.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}
