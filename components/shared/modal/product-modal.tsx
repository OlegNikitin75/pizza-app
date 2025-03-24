'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog } from '@/components/ui'
import { DialogContent } from '@/components/ui/dialog'
import { Ingredient } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { PizzaForm, ProductForm } from '..'

interface IProductModalProps {
	product: ProductWithRelations
	ingredients: Ingredient[]
}

export const ProductModal: FC<IProductModalProps> = ({
	product,
	ingredients
}) => {
	const router = useRouter()
	const isPizza = Boolean(product.items[0].pizzaType)
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='w-full max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				{isPizza ? (
					<PizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={ingredients}
						items={product.items}
					/>
				) : (
					<ProductForm imageUrl={product.imageUrl} name={product.name} />
				)}
			</DialogContent>
		</Dialog>
	)
}
