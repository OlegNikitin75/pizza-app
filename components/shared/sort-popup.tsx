import { ArrowDownUp } from 'lucide-react'
import { FC } from 'react'

interface ISortPopupProps {}

export const SortPopup: FC<ISortPopupProps> = ({}) => {
	return (
		<div className='p-1 inline-block'>
			<div className='inline-flex items-center gap-2 bg-app-line-gray px-5 rounded-xl cursor-pointer h-14'>
				<ArrowDownUp />
				<span>Сортировать по:</span>
				<span className='text-app-primary'>популярности</span>
			</div>
		</div>
	)
}
