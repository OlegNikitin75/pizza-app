import { CATEGORIES, iconComponents } from '@/constants/categories'
import { FC } from 'react'

interface ICategoriesProps {}

const LinkIcon = ({ icon }:{icon:string}) => {
	const IconComponent = iconComponents[icon]
	return <IconComponent />
}

export const Categories: FC<ICategoriesProps> = ({}) => {
	return (
		<div className='inline-flex justify-between bg-app-line-gray p-1 gap-2 rounded-xl'>
			{CATEGORIES.map(cat => (
				<a
					key={cat.title}
					href={cat.url}
					className='group flex flex-col justify-center items-center gap-y-2 text-app-primary bg-white rounded-xl py-2 min-w-32 px-4'
				>
					<span className='scale-125'>
						<LinkIcon icon={cat.icon} />
					</span>

					<span className='group-hover:text-app-primary transition duration-300 text-app-black text-lg'>
						{cat.title}
					</span>
				</a>
			))}
		</div>
	)
}
