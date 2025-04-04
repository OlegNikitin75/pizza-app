import { ArrowDownUp } from 'lucide-react'

export const SortPopup = () => {
	return (
		<div className='flex-1'>
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
