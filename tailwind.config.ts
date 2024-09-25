import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				'app-primary': '#FF7010',
				'app-black': '#191919',
				'app-gray-text': '#a5a5a5',
				'app-line-gray': '#f0f0f0',
				'app-bg-gray': '#f9f9f9',
				'app-red': '#E23535',
				'app-light-primary': '#FFEEE2',
				'app-green': '#24D17E'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
}
export default config
