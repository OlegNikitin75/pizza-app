import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

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

				<SheetFooter className='-mx-6 bg-white p-8'>
					<div className='w-full'>
						<div className='flex mb-4'>
							<span className='flex flex-1 text-lg text-app-gray-text'>
								{' '}
								Итого:
							</span>
							<span className='font-bold text-lg'>60 руб.</span>
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
