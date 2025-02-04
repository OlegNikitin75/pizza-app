import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Куда пицца',
	description: 'Pizza delivery web app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<Header/>
        <main className='min-h-screen bg-app-bg-gray'>

        {children}
        </main>
        </body>
		</html>
	)
}
