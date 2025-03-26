'use client'

import { PizzaSize, PizzaType } from '@/constants/pizza'
import { getCartItemDetails } from '@/lib'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC, PropsWithChildren} from 'react'

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
import { useCart } from '@/hooks'

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
	
	const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
	console.log(items)



	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent className='pb-0 flex flex-col justify-between gap-5 bg-app-line-gray'>
				<SheetHeader>
					<SheetTitle>
						В корзине <span>3 товара</span>
					</SheetTitle>
					<SheetDescription>Все товары в корзине</SheetDescription>
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
							<span className='font-bold text-lg'>{totalAmount} руб.</span>
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
