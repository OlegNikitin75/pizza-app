import { Header } from '@/components/shared'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Куда пицца',
	description: 'Pizza delivery web app'
}

export default function RootLayout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-app-bg-gray'>{children}</main>
			{modal}
		</>
	)
}
