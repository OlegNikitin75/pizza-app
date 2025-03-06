'use client'

import { CATEGORIES } from '@/constants/categories'
import { useCategoryStore } from '@/store/category-store'

export const Categories = () => {
	const categoryActiveId = useCategoryStore(state => state.activeId)
	return (
		<div className='inline-flex flex-wrap bg-app-line-gray p-1 gap-2 rounded-xl'>
			{CATEGORIES.map(cat => (
				<a
					key={cat.title}
					href={cat.url}
					className={`group flex flex-col justify-center items-center gap-y-2 text-app-primary rounded-lg py-2 sm:w-32 w-full px-4 ${cat.id === categoryActiveId ? ' bg-app-primary' : 'bg-white'}`}
				>

					<span
						className={`group-hover:text-app-primary transition duration-300 text-app-black text-lg ${cat.id === categoryActiveId ? ' text-white' : ''}`}
					>
						{cat.title}
					</span>
				</a>
			))}
		</div>
	)
}
