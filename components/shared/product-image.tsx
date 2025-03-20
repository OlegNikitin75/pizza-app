import { cn } from '@/lib/utils'
import { FC } from 'react'

interface IProductImageProps {
	src: string
	alt: string
	size: number
}

export const ProductImage: FC<IProductImageProps> = ({ src, alt, size }) => {
	return (
		<div>
			<img
				src={src}
				alt={alt}
				className={cn(
					'relative left-2 top-2 transition-all z-10 duration-300',
					{
						'w-[180px] h-[180px] sm:w-[300px] sm:h-[300px]': size === 20,
						'w-[280px] h-[280px] sm:w-[400px] sm:h-[400px]': size === 30,
						'w-[380px] h-[380px] sm:w-[500px] sm:h-[500px]': size === 40
					}
				)}
			/>
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]' />
			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]' />
		</div>
	)
}
