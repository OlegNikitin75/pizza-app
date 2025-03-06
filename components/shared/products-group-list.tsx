'use client'

import { useCategoryStore } from '@/store/category-store'
import clsx from 'clsx'
import { FC, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { H2, Heading } from '.'
import { ProductCard } from './product-card'

interface IProductsGroupListProps {
	title: string
	idForUrl: string
	items: any[]
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
		threshold: 0.8
	})
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)

	useEffect(() => {
		if (intersection?.isIntersecting) setActiveCategoryId(categoryId)
	}, [categoryId, intersection?.isIntersecting, setActiveCategoryId])

	return (
		<div className='w-full' id={idForUrl} ref={intersectionRef}>
			<H2>{title}</H2>
			<div className={clsx('flex flex-wrap gap-4 justify-between sm:justify-start', listClassName)}>
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
