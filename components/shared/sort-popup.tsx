import { ArrowDownUp } from 'lucide-react'
import { FC } from 'react'

import { H3 } from '.'

interface ISortPopupProps {}

export const SortPopup: FC<ISortPopupProps> = ({}) => {
	return (
		<div className='flex-1 sm:basis-1/4 sm:flex-none '>
			<div className='p-3 flex justify-between items-center gap-2 bg-app-line-gray rounded-lg cursor-pointer'>
				<div className='space-x-2'>
					<span className='font-medium'>Сортировка:</span>
					<span className='text-app-primary'>популярные</span>
				</div>

				<ArrowDownUp size={16} color='#FF7010' />
			</div>
		</div>
	)
}
