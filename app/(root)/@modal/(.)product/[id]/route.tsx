import {
	Container,
	H3,
	ProductImage,
	VariantsSelector
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { notFound } from 'next/navigation'
import { FC } from 'react'

interface IProductPageProps {
	params: {
		id: string
	}
}

const ProductModalPage: FC<IProductPageProps> = async ({ params }) => {
	return <h1>product modal</h1>
	// const product = await prisma.product.findUnique({
	// 	where: {
	// 		id: Number(params.id)
	// 	}
	// })
	// if (!product) return notFound()

	// return (
	// 	<Container className='flex flex-col my-10'>
	// 		<div className='flex flex-1'>
	// 			<ProductImage src={product.imageUrl} alt={product.name} size={40} />
	// 			<div className='bg-app-bg-gray max-w-[500px] w-full'>
	// 				<H3>{product.name}</H3>
	// 				<VariantsSelector
	// 					items={[
	// 						{ name: 'Маленькая', value: '1' },
	// 						{ name: 'Средняя', value: '2' },
	// 						{ name: 'Большая', value: '3',disabled: true }
	// 					]}
	// 					selectedValue='2'
	// 				/>
	// 			</div>
	// 		</div>
	// 	</Container>
	// )
}
export default ProductModalPage
