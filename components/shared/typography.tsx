import React, { ReactNode } from 'react'

interface Props {
	className?: string
	children:  ReactNode
}

const H1: React.FC<Props> = ({ className, children }) => {
	return <h1 className={`text-5xl leading-[110%] md:text-5xl ${className}`}>{children}</h1>
}

const H2: React.FC<Props> = ({ className, children }) => {
	return <h2 className={`font-medium leading-[120%] md:text-5xl text-3xl ${className}`}>{children}</h2>
}

const H3: React.FC<Props> = ({ className, children }) => {
	return <h3 className={`font-bold text-base leading-[120%] md:text-lg ${className}`}>{children}</h3>
}

const H4: React.FC<Props> = ({ className, children }) => {
	return <h4 className={`font-play700 text-base tracking-tight ${className}`}>{children}</h4>
}

const H5: React.FC<Props> = ({ className, children }) => {
	return <h5 className={`font-play400 text-sm tracking-tight ${className}`}>{children}</h5>
}

const P: React.FC<Props> = ({ className, children }) => {
	return <p className={`text-sm leading-[120%] md:text-base ${className}`}>{children}</p>
}

const Blockquote: React.FC<Props> = ({ className, children }) => {
	return <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>{children}</blockquote>
}

const Lead: React.FC<Props> = ({ className, children }) => {
	return <p className={`text-muted-foreground text-xl ${className}`}>{children}</p>
}

const Large: React.FC<Props> = ({ className, children }) => {
	return <div className={`text-lg font-semibold ${className}`}>{children}</div>
}

const Muted: React.FC<Props> = ({ className, children }) => {
	return <p className={`text-muted-foreground text-sm ${className}`}>{children}.</p>
}

export { H1, H2, H3, H4, H5, P, Lead, Large, Muted, Blockquote }
