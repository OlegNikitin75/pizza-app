'use client'

import { UserRound } from 'lucide-react'
import Link from 'next/link'

import { CartButton } from '.'
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
					<CartButton />
				</div>
			</Container>
		</header>
	)
}
