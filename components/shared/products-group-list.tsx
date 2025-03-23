'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { useCategoryStore } from '@/store/category-store'
import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { H2 } from '.'
import { ProductCard } from './product-card'

interface IProductsGroupListProps {
	title: string
	idForUrl?: string
	items: ProductWithRelations[]
	className?: string
	listClassName?: string
	categoryId: number
}

export const ProductsGroupList: FC<IProductsGroupListProps> = ({
	title,
	idForUrl,
	items,
	listClassName,
	categoryId
}) => {
	const intersectionRef = useRef(null)
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	})
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	useEffect(() => {
		if (intersection?.isIntersecting) setActiveCategoryId(categoryId)
	}, [categoryId, intersection?.isIntersecting, setActiveCategoryId])

	return (
		<div id={title} ref={intersectionRef}>
			<H2 className='mb-4'>{title}</H2>
			<div
				className={clsx(
					'flex flex-wrap gap-4 justify-between md:justify-start',
					listClassName
				)}
			>
				{items.map(item => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						price={item.items[0].price}
						imageUrl={item.imageUrl}
						ingredients={item.ingredients}
					/>
				))}
			</div>
		</div>
	)
}
