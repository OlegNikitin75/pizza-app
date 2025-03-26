import { mapPizzaType, PizzaSize, PizzaType } from '@/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'

import { pizzaCostCalculation } from './pizza-cost-calculation'

export const getPizzaDetails = (
	items: ProductItem[],
	size: PizzaSize,
	type: PizzaType,
	allIngredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const textDetails = `${size} см, ${mapPizzaType[type]} тесто`
	const totalPizzaPrice = pizzaCostCalculation(
		items,
		size,
		allIngredients,
		selectedIngredients
	)
	return {
		textDetails,
		totalPizzaPrice
	}
}
