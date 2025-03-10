'use client'

import { ArrowRight, ShoppingCart, UserRound } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui'
import { Container } from './container'
import { SearchInput } from './search-input'

export const Header = () => {
	const handleClick = () => {}
	return (
		<header>
			<Container className='flex items-center justify-between flex-col sm:flex-row gap-4 py-4 sm:py-6 md:flex-wrap'>
				<Link href='/' className='flex items-center gap-4'>
					<img width={32} height={32} src='/images/logo.svg' alt='logo' />
					<span className='text-xl font-bold uppercase'>Куда пицца</span>
				</Link>
				<div className='flex-1 w-full md:mx-10 order-last sm:order-none '>
					<SearchInput />
				</div>
				<div className='flex justify-between items-center w-full sm:w-fit gap-4'>
					<div
						onClick={handleClick}
						className='flex cursor-pointer items-center gap-2'
					>
						<UserRound color='#FF7010' />
						<span>Войти в аккаунт</span>
					</div>
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
				</div>
			</Container>
		</header>
	)
}
