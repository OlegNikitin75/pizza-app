'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog } from '@/components/ui'
import { DialogContent } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { PizzaForm, ProductForm } from '..'

interface IProductModalProps {
	product: ProductWithRelations
}

export const ProductModal: FC<IProductModalProps> = ({ product }) => {
	const router = useRouter()
	const isPizza = Boolean(product.items[0].pizzaType)
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='w-full max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				{
					isPizza ?
					<PizzaForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={undefined}
						items={undefined}
					/>
					:
					<ProductForm
						imageUrl={product.imageUrl}
						name={product.name}
						ingredients={undefined}
						items={undefined}
					/>
				}
			
			</DialogContent>
		</Dialog>
	)
}
