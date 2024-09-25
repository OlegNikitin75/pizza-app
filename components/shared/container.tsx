import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface IContainerProps {
	className?: string
	children: ReactNode
}

export const Container: FC<IContainerProps> = ({ className, children }) => {
	return (
		<div className={clsx(className, 'mx-auto max-w-[1326px] px-4')}>
			{children}
		</div>
	)
}
