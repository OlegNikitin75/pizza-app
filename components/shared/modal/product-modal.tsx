'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog } from '@/components/ui'
import { DialogContent, DialogTitle } from '@/components/ui/dialog'
import { useCart } from '@/hooks'
import { useCartStore } from '@/store'
import { Ingredient } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { PizzaForm, ProductForm } from '..'

interface IProductModalProps {
	product: ProductWithRelations
	allIngredients: Ingredient[]
}

export const ProductModal: FC<IProductModalProps> = ({
	product,
	allIngredients
}) => {
	const router = useRouter()

	const firstItem = product.items[0]
	const isPizza = Boolean(firstItem.pizzaType)

	const addCartItem = useCartStore(state => state.addCartItem)

	const addProduct = () => {
		addCartItem({
			productItemId: firstItem.id
		})
	}
	const addPizza = (productItemId: number, ingredients: number[]) => {
		addCartItem({
			productItemId,
			ingredients
		})
	}

	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='w-full max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				<DialogTitle className='hidden'>{product.name}</DialogTitle>
				{isPizza ? (
					<PizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						allIngredients={allIngredients}
						pizzaIngredients={product.ingredients}
						items={product.items}
						onSubmit={addPizza}
					/>
				) : (
					<ProductForm
					price={firstItem.price}
						imageUrl={product.imageUrl}
						name={product.name}
						onSubmit={addProduct}
					/>
				)}
			</DialogContent>
		</Dialog>
	)
}
