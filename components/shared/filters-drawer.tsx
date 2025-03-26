'use client'

import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { SlidersHorizontal } from 'lucide-react'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui'
import { Filters } from './filters'

export const FiltersDrawer = () => {
	return (
		<Sheet>
			<SheetTrigger asChild className='h-12 text-base bg-app-line-gray flex-1'>
				<Button variant='outline' className='flex items-center gap-3'>
					Показать фильтры
					<SlidersHorizontal size={16} color='#FF7010' />
				</Button>
			</SheetTrigger>
			<SheetTitle className='hidden'>Все фильтры</SheetTitle>
			<SheetContent>
				<div className='mx-auto w-full max-w-sm p-5 '>
					<Filters />
				</div>
				<Button variant='default' className='text-white w-full text-base h-12'>
					Сбросить фильтры
				</Button>
			</SheetContent>
		</Sheet>
	)
}
