import { ArrowRight, ShoppingCart } from 'lucide-react'
import { FC } from 'react'

import { Button } from '../ui'
import { CartDrawer } from './cart-drawer'

interface ICartButton {}

export const CartButton: FC<ICartButton> = ({}) => {
	return (
		<CartDrawer>
			<Button className='group relative rounded-md bg-app-primary min-w-24 h-10'>
				<div className='flex items-center gap-2 group-hover:opacity-0 transition duration-300'>
					<ShoppingCart color='#fff' />
					<div className='text-lg text-white'>
						<span>0</span>
						<span className='ml-1.5'>p.</span>
					</div>
				</div>
				<ArrowRight
					color='#fff'
					className='absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300'
				/>
			</Button>
		</CartDrawer>
	)
}
