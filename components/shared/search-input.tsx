'use client'

import { Api } from '@/services/api-client'
import { Product } from '@prisma/client'
import clsx from 'clsx'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { SetStateAction, useRef, useState } from 'react'
import { useClickAway, useDebounce } from 'react-use'

export const SearchInput = ({ className }: { className?: string }) => {
	const [focused, setFocused] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [products, setProducts] = useState<Product[]>([])
	const ref = useRef(null)
	useClickAway(ref, () => {
		setFocused(false)
	})

	useDebounce(
		async () => {
			try {
				const res = await Api.products.search(searchQuery)
				setProducts(res)
			} catch (error) {
				console.log(error)
			}
		},
		200,
		[searchQuery]
	)

	const onClickItem = () => {
		setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

	return (
		<>
			{focused && (
				<div className='fixed top-0 left-0 w-full h-full z-20 bg-app-black/50 '></div>
			)}

			<div
				ref={ref}
				className={clsx(
					'relative z-30 flex items-center gap-2 bg-app-line-gray rounded-lg h-11',
					className
				)}
			>
				<Search
					className={clsx(
						`absolute top-1/2 -translate-y-1/2 left-3 h-4 ${focused ? 'text-app-primary' : 'text-app-gray-text'}`
					)}
				/>
				<input
					className={clsx(
						`outline-none w-full h-full pl-10 pr-4  bg-app-line-gray rounded-lg ${focused ? 'border-2 border-app-primary' : ''}`,
						className
					)}
					type='text'
					placeholder='Поиск пиццы'
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={(e: { target: { value: SetStateAction<string> } }) =>
						setSearchQuery(e.target.value)
					}
				/>

				{products.length > 0 && (
					<div
						className={clsx(
							'absolute w-full bg-white top-12  shadow-md rounded-md transition-all duration-300 visible opacity-100 z-30 overflow-hidden',
							!focused && 'invisible opacity-0 top-10'
						)}
					>
						{products.map(product => (
							<Link
								onClick={() => onClickItem()}
								key={product.id}
								href={`/product/${product.id}`}
								className='hover:bg-app-primary/60 inline-flex items-center w-full px-3 py-2 gap-x-3  hover:text-white'
							>
								<img
									width={24}
									height={24}
									src={product.imageUrl}
									alt={product.name}
								/>
								<span className=' inline-block   transition-colors'>
									{product.name}
								</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	)
}
