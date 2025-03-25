import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'

import { _ingredients, categories, products } from './constants'
import { prisma } from './prisma-client'

// const randomDecimalNumber = (min: number, max: number) => {
// 	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
// }

const generateProductItem = ({
	productId,
	pizzaType,
	size,
	price
}: {
	productId: number
	pizzaType?: 1 | 2
	size?: 20 | 30 | 40
	price: number
}) => {
	return {
		productId,
		price,
		pizzaType,
		size
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER'
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN'
			}
		]
	})

	await prisma.category.createMany({
		data: categories
	})

	await prisma.ingredient.createMany({
		data: _ingredients
	})

	await prisma.product.createMany({
		data: products
	})

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Супер Спайси',
			imageUrl: '/images/products/pizza/pizza-1.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[6],
					_ingredients[7],
					_ingredients[1],
					_ingredients[19],
					_ingredients[13],
					_ingredients[12]
				]
			}
		}
	})

	const pizza2 = await prisma.product.create({
		data: {
			name: '5 Сыров',
			imageUrl: '/images/products/pizza/pizza-2.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[4],
					_ingredients[20],
					_ingredients[1],
					_ingredients[5],
					_ingredients[2]
				]
			}
		}
	})

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Карбонара',
			imageUrl: '/images/products/pizza/pizza-3.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[9],
					_ingredients[20],
					_ingredients[1],
					_ingredients[6],
					_ingredients[11],
					_ingredients[15]
				]
			}
		}
	})

	const pizza4 = await prisma.product.create({
		data: {
			name: 'Тоскана',
			imageUrl: '/images/products/pizza/pizza-4.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[4],
					_ingredients[8],
					_ingredients[1],
					_ingredients[13],
					_ingredients[5],
					_ingredients[16]
				]
			}
		}
	})

	const pizza5 = await prisma.product.create({
		data: {
			name: 'Пепперони',
			imageUrl: '/images/products/pizza/pizza-5.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[4],
					_ingredients[7],
					_ingredients[20],
					_ingredients[1]
				]
			}
		}
	})

	const pizza6 = await prisma.product.create({
		data: {
			name: 'Барбекю',
			imageUrl: '/images/products/pizza/pizza-6.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[21],
					_ingredients[6],
					_ingredients[1],
					_ingredients[8],
					_ingredients[11],
					_ingredients[15]
				]
			}
		}
	})

	const pizza7 = await prisma.product.create({
		data: {
			name: 'Маргарита',
			imageUrl: '/images/products/pizza/pizza-7.png',
			categoryId: 1,
			ingredients: {
				connect: [_ingredients[1], _ingredients[19]]
			}
		}
	})

	const pizza8 = await prisma.product.create({
		data: {
			name: 'Чеддерони',
			imageUrl: '/images/products/pizza/pizza-8.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[20],
					_ingredients[7],
					_ingredients[1],
					_ingredients[9],
					_ingredients[2]
				]
			}
		}
	})

	const pizza9 = await prisma.product.create({
		data: {
			name: 'Фермерская',
			imageUrl: '/images/products/pizza/pizza-9.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[9],
					_ingredients[14],
					_ingredients[20],
					_ingredients[1]
				]
			}
		}
	})
	const pizza10 = await prisma.product.create({
		data: {
			name: '4 сезона',
			imageUrl: '/images/products/pizza/pizza-10.png',
			categoryId: 1,
			ingredients: {
				connect: [
					_ingredients[17],
					_ingredients[10],
					_ingredients[9],
					_ingredients[20],
					_ingredients[1],
					_ingredients[13],
					_ingredients[5]
				]
			}
		}
	})

	await prisma.productItem.createMany({
		data: [
			// Пицца "Супер Спайс"
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 20,
				price: 21.99
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 30,
				price: 26.99
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 1,
				size: 40,
				price: 29.99
			}),

			generateProductItem({
				productId: pizza1.id,
				pizzaType: 2,
				size: 30,
				price: 26.99
			}),
			generateProductItem({
				productId: pizza1.id,
				pizzaType: 2,
				size: 40,
				price: 29.99
			}),

			// Пицца "5 сыров"
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 1,
				size: 20,
				price: 23.99
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 1,
				size: 30,
				price: 30.99
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 1,
				size: 40,
				price: 38.99
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 2,
				size: 30,
				price: 30.99
			}),
			generateProductItem({
				productId: pizza2.id,
				pizzaType: 2,
				size: 40,
				price: 38.99
			}),

			// Пицца "Карбонара"
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 20,
				price: 22.99
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 1,
				size: 40,
				price: 35.99
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 2,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza3.id,
				pizzaType: 2,
				size: 40,
				price: 35.99
			}),

			// Пицца "Тоскана"
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 1,
				size: 20,
				price: 23.99
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 1,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 1,
				size: 40,
				price: 38.99
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 2,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza4.id,
				pizzaType: 2,
				size: 40,
				price: 38.99
			}),

			// Пицца "Пепперони"
			generateProductItem({
				productId: pizza5.id,
				pizzaType: 1,
				size: 20,
				price: 21.99
			}),
			generateProductItem({
				productId: pizza5.id,
				pizzaType: 1,
				size: 30,
				price: 27.99
			}),
			generateProductItem({
				productId: pizza5.id,
				pizzaType: 1,
				size: 40,
				price: 35.99
			}),
			generateProductItem({
				productId: pizza5.id,
				pizzaType: 2,
				size: 30,
				price: 27.99
			}),
			generateProductItem({
				productId: pizza5.id,
				pizzaType: 2,
				size: 40,
				price: 35.99
			}),

			// Пицца "Барбекю"
			generateProductItem({
				productId: pizza6.id,
				pizzaType: 1,
				size: 20,
				price: 21.99
			}),
			generateProductItem({
				productId: pizza6.id,
				pizzaType: 1,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza6.id,
				pizzaType: 1,
				size: 40,
				price: 34.99
			}),
			generateProductItem({
				productId: pizza6.id,
				pizzaType: 2,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza6.id,
				pizzaType: 2,
				size: 40,
				price: 34.99
			}),

			// Пицца "Маргарита"
			generateProductItem({
				productId: pizza7.id,
				pizzaType: 1,
				size: 20,
				price: 8.99
			}),
			generateProductItem({
				productId: pizza7.id,
				pizzaType: 1,
				size: 30,
				price: 16.99
			}),
			generateProductItem({
				productId: pizza7.id,
				pizzaType: 1,
				size: 40,
				price: 29.99
			}),
			generateProductItem({
				productId: pizza7.id,
				pizzaType: 2,
				size: 30,
				price: 16.99
			}),
			generateProductItem({
				productId: pizza7.id,
				pizzaType: 2,
				size: 40,
				price: 29.99
			}),

			// Пицца "Чеддерони"

			generateProductItem({
				productId: pizza8.id,
				pizzaType: 1,
				size: 20,
				price: 21.99
			}),
			generateProductItem({
				productId: pizza8.id,
				pizzaType: 1,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza8.id,
				pizzaType: 1,
				size: 40,
				price: 35.99
			}),
			generateProductItem({
				productId: pizza8.id,
				pizzaType: 2,
				size: 30,
				price: 28.99
			}),
			generateProductItem({
				productId: pizza8.id,
				pizzaType: 2,
				size: 40,
				price: 35.99
			}),

			// Пицца "Фермерская"
			generateProductItem({
				productId: pizza9.id,
				pizzaType: 1,
				size: 20,
				price: 17.99
			}),
			generateProductItem({
				productId: pizza9.id,
				pizzaType: 1,
				size: 30,
				price: 26.99
			}),
			generateProductItem({
				productId: pizza9.id,
				pizzaType: 1,
				size: 40,
				price: 32.99
			}),
			generateProductItem({
				productId: pizza9.id,
				pizzaType: 2,
				size: 30,
				price: 26.99
			}),
			generateProductItem({
				productId: pizza9.id,
				pizzaType: 2,
				size: 40,
				price: 32.99
			}),

			// Пицца "4 сезона"

			generateProductItem({
				productId: pizza10.id,
				pizzaType: 1,
				size: 20,
				price: 31.99
			}),
			generateProductItem({
				productId: pizza10.id,
				pizzaType: 1,
				size: 30,
				price: 34.99
			}),
			generateProductItem({
				productId: pizza10.id,
				pizzaType: 1,
				size: 40,
				price: 38.99
			}),
			generateProductItem({
				productId: pizza10.id,
				pizzaType: 2,
				size: 30,
				price: 34.99
			}),
			generateProductItem({
				productId: pizza10.id,
				pizzaType: 2,
				size: 40,
				price: 38.99
			}),

			// Остальные продукты
			// Комбо
			generateProductItem({ productId: 1, price: 35.99 }),
			generateProductItem({ productId: 2, price: 38.99 }),
			generateProductItem({ productId: 3, price: 50.99 }),
			generateProductItem({ productId: 4, price: 40.99 }),
			generateProductItem({ productId: 5, price: 26.99 }),
			// Закуски
			generateProductItem({ productId: 6, price: 10.99 }),
			generateProductItem({ productId: 7, price: 11.99 }),
			generateProductItem({ productId: 8, price: 12.99 }),
			generateProductItem({ productId: 9, price: 12.99 }),
			generateProductItem({ productId: 10, price: 12.99 }),
			generateProductItem({ productId: 11, price: 29.99 }),
			generateProductItem({ productId: 12, price: 7.99 }),
			generateProductItem({ productId: 13, price: 8.99 }),
			generateProductItem({ productId: 14, price: 7.99 }),
			// Десерты
			generateProductItem({ productId: 15, price: 7.16 }),
			generateProductItem({ productId: 16, price: 7.16 }),
			generateProductItem({ productId: 17, price: 9.99 }),
			generateProductItem({ productId: 18, price: 9.99 }),
			generateProductItem({ productId: 19, price: 8.99 }),
			generateProductItem({ productId: 20, price: 8.99 }),
			// Напитки
			generateProductItem({ productId: 21, price: 5.35 }),
			generateProductItem({ productId: 22, price: 4.92 }),
			generateProductItem({ productId: 23, price: 5.85 }),
			generateProductItem({ productId: 24, price: 5.11 }),
			generateProductItem({ productId: 25, price: 4.99 }),
			generateProductItem({ productId: 26, price: 4.99 }),
			// Соусы
			generateProductItem({ productId: 27, price: 1.29 }),
			generateProductItem({ productId: 28, price: 1.29 }),
			generateProductItem({ productId: 29, price: 1.29 }),
			generateProductItem({ productId: 30, price: 1.29 }),
			generateProductItem({ productId: 31, price: 1.29 }),
			generateProductItem({ productId: 32, price: 1.29 })
		]
	})

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '11111'
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222222'
			}
		]
	})

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }]
			}
		}
	})

	await prisma.story.createMany({
		data: [
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496'
			},
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640'
			},
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020'
			},
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958'
			},
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737'
			},
			{
				previewImageUrl:
					'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284'
			}
		]
	})

	await prisma.storyItem.createMany({
		data: [
			{
				storyId: 1,
				sourceUrl:
					'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE'
			},
			{
				storyId: 1,
				sourceUrl:
					'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE'
			},
			{
				storyId: 1,
				sourceUrl:
					'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE'
			},
			{
				storyId: 1,
				sourceUrl:
					'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE'
			},
			{
				storyId: 1,
				sourceUrl:
					'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE'
			}
		]
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
