import {
	Container,
	Filters,
	ProductsGroupList,
	SortPopup,
	TopBar
} from '@/components/shared'
import { prisma } from '@/prisma/prisma-client'

export const Home = async () => {
	const categories = await prisma.category.findMany({
		include: { products: { include: { ingredients: true, items: true } } }
	})

	return (
		<>
			<TopBar />
			<Container>
				<div className='flex flex-col-reverse lg:flex-row gap-4'>
					<div className='flex flex-col justify-between gap-4'>
						{categories.map(
							category =>
								category.products.length > 0 && (
									<section className='mb-6' key={category.id}>
										<ProductsGroupList
											title={category.name}
											items={category.products}
											categoryId={category.id}
										/>
									</section>
								)
						)}
					</div>
					<div className='flex shrink-0 basis-1/4 flex-col gap-y-8'>
					
						<Filters />
					</div>
				</div>
			</Container>
		</>
	)
}
export default Home
