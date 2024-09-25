import {
	Container,
	Filters,
	Heading,
	ProductsGroupList,
	SortPopup,
	TopBar
} from '@/components/shared'

export default function Home() {
	return (
		<>
			<TopBar />
			<Container className='mt-4'>
			<Filters />
				<section className=''>
				
					<div className='flex justify-between gap-8'>
						
						<ProductsGroupList
							title='Пиццы'
							items={[
								{
									id: 1,
									name: 'Чизбургер-пицца',
									price: 8,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 8 }]
								},
								{
									id: 2,
									name: 'Чизбургер-пицца',
									price: 9,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 10 }]
								}
							]}
							categoryId={1}
						/>
						
					</div>
				</section>
				<section className=''>
					<div className='flex justify-between gap-8'>
						<ProductsGroupList
							title='Суши'
							items={[
								{
									id: 1,
									name: 'Чизбургер-пицца',
									price: 8,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 8 }]
								},
								{
									id: 2,
									name: 'Чизбургер-пицца',
									price: 9,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 10 }]
								}
							]}
							categoryId={1}
						/>
						
					</div>
				</section>
			</Container>
		</>
	)
}
