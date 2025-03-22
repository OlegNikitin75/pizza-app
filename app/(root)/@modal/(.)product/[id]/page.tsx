import { ProductModal } from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { FC } from 'react'

interface IProductPageProps {
	params: {
		id: string
	}
}

const ProductModalPage: FC<IProductPageProps> = async ({ params }) => {
	const product = await prisma.product.findUnique({
		where: {
			id: Number(params.id)
		},
		include: {
			ingredients: true,
			items: true
		}
	})
	if (!product) {
		return notFound()
	}

	return <ProductModal product={product} />
}
export default ProductModalPage
