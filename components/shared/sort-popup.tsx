import { ArrowDownUp } from 'lucide-react'
import { FC } from 'react'

import {  H3 } from '.'

interface ISortPopupProps {}

export const SortPopup: FC<ISortPopupProps> = ({}) => {
	return (
		<div className='inline-block'>
			<H3 className='mb-2 font-semibold text-center'>Сортировка</H3>
			<div className='p-3  w-full inline-flex justify-between items-center gap-2 bg-app-line-gray rounded-lg cursor-pointer'>
				<span>По популярности</span>
				<ArrowDownUp size={16} color='#FF7010' />
			</div>
		</div>
	)
}
