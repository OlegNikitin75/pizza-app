'use client'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { SlidersHorizontal } from 'lucide-react'

import { Filters } from './filters'

export const FiltersMenu = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild className='h-12 bg-app-line-gray flex-1'>
				<Button variant='outline' className='flex items-center gap-3'>
					Показать фильтры
					<SlidersHorizontal size={16} color='#FF7010' />
				</Button>
			</DrawerTrigger>
			<DrawerTitle className='hidden'>Все фильтры</DrawerTitle>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm p-5 '>
					<Filters />
				</div>
				<DrawerTrigger
					asChild
					className='h-12 bg-app-primary flex-1 w-full text-white text-center '
				>
					<Button variant='outline'>Скрыть фильтры</Button>
				</DrawerTrigger>
			</DrawerContent>
		</Drawer>
	)
}
