import { ArrowDownUp } from 'lucide-react'
import { FC } from 'react'

import { Heading } from './heading'
import { H2 } from '.'

interface ISortPopupProps {}

export const SortPopup: FC<ISortPopupProps> = ({}) => {
	return (
		<div className='inline-block'>
			<H2 className='mb-2 font-semibold'>Сортировка</H2>
			<Heading text='Сортировка' size='sm' className='mb-2 font-semibold' />
			<div className='p-3 w-full inline-flex justify-between items-center gap-2 bg-app-line-gray rounded-lg cursor-pointer h-14'>
				<span>По популярности</span>
				<ArrowDownUp size={16} color='#FF7010' />
			</div>
		</div>
	)
}
