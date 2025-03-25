export const mapPizzaSize = {
	20: 'Маленькая',
	30: 'Средняя',
	40: 'Большая'
} as const

export const mapPizzaType = {
	1: 'Тонкое',
	2: 'Традиционное'
} as const

const pizzaSizes = Object.entries(mapPizzaSize)
const pizzaTypes = Object.entries(mapPizzaType)

export const pizzaSizesOptions = pizzaSizes.map(([value, name]) => ({
	name,
	value
}))

export const pizzaTypesOptions = pizzaTypes.map(([value, name]) => ({
	name,
	value
}))

export type PizzaSize = keyof typeof mapPizzaSize
export type PizzaType = keyof typeof mapPizzaType