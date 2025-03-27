'use client'

import { PizzaSize, PizzaType } from '@/constants/pizza'
import { useCart } from '@/hooks'
import { getCartItemDetails } from '@/lib'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import { CartDrawerItem } from '.'
import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui'

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

	const onClickCountButton = (
		id: number,
		quantity: number,
		type: 'plus' | 'minus'
	) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='pb-0 flex flex-col justify-between gap-5 bg-app-line-gray'>
				<SheetHeader>
					<SheetTitle>
						{items.length === 0 ? (
							<span>Ваша корзина пуста</span>
						) : (
							<span>
								Всего товаров в корзине <span>{items.length}</span>
							</span>
						)}
					</SheetTitle>
					<SheetDescription className='hidden'>
						Все товары в корзине
					</SheetDescription>
				</SheetHeader>
				<div className='-mx-6 overflow-auto flex-1 mt-5'>
					<div className='mb-2'>
						{items.map(item => (
							<CartDrawerItem
								key={item.id}
								id={item.id}
								imageUrl={item.imageUrl}
								details={getCartItemDetails(
									item.ingredients,
									item.pizzaType as PizzaType,
									item.pizzaSize as PizzaSize
								)}
								name={item.name}
								price={item.price}
								quantity={item.quantity}
								onClickCountButton={type =>
									onClickCountButton(item.id, item.quantity, type)
								}
								onClickRemove={() => removeCartItem(item.id)}
							/>
						))}
					</div>
				</div>

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-app-gray-text'>
								{' '}
								Итого:
							</span>
							<span className='font-bold text-lg'>
								{totalAmount.toFixed(2)} руб.
							</span>
						</div>
						<Link href='/cart'>
							<Button
								type='submit'
								className='w-full h-12 text-base text-white'
							>
								Оформить заказ
								<ArrowRight className='ml-2 h-5 w-5' />
							</Button>
						</Link>
					</div>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
