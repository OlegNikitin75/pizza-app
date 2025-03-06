import {
	Container,
	Filters,
	ProductsGroupList,
	SortPopup,
	TopBar
} from '@/components/shared'

export const Home= () => {
	return (
		<>
			<TopBar />
			<Container>
				<section className='mb-6 '>
					<div className='flex flex-col-reverse sm:flex-row justify-between gap-4'>
						<ProductsGroupList
							title='Пиццы'
							idForUrl='pizza'
							categoryId={1}
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
								},
								{
									id: 3,
									name: 'Чизбургер-пицца',
									price: 9,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 10 }]
								},
								{
									id: 4,
									name: 'Чизбургер-пицца',
									price: 9,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 10 }]
								},
								{
									id: 5,
									name: 'Чизбургер-пицца',
									price: 9,
									imageUrl: '/images/products/pizza/pizza_cheeseburger.png',
									items: [{ price: 10 }]
								}
							]}
						/>
						<div className='flex sm:p-4 basis-1/4 flex-col gap-y-8'>
							<SortPopup />
							<Filters />
						</div>
					</div>
				</section>
				<section className='mb-6'>
					<div className='flex flex-col-reverse sm:flex-row justify-between gap-4'>
						<ProductsGroupList
							title='Суши'
							idForUrl='sushi'
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
							categoryId={2}
						/>
						<div className='flex sm:p-4 basis-1/4 flex-col gap-y-8'>
							<SortPopup />
						</div>
					</div>
				</section>
			</Container>
		</>
	)
}
export default Home
