import { ProductModal } from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'

type Params = Promise<{ id: string }>

const ProductModalPage = async ({ params }: { params: Params }) => {
	const { id } = await params

	const ingredients = await prisma.ingredient.findMany({})
	const product = await prisma.product.findUnique({
		where: {
			id: Number(id)
		},
		include: {
			ingredients: true,
			items: true
		}
	})
	if (!product) {
		return notFound()
	}

	return <ProductModal product={product} allIngredients={ingredients} />
}
export default ProductModalPage
