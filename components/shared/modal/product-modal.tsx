'use client'

import { Dialog } from '@/components/ui'
import { DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Product } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface IProductModalProps {
	product: Product
}

export const ProductModal: FC<IProductModalProps> = ({ product }) => {
	const router = useRouter()
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className='w-full max-w-[1060px] min-h-[500px] bg-white overflow-hidden'>
				<DialogTitle>{product.name}</DialogTitle>
			</DialogContent>
		</Dialog>
	)
}
