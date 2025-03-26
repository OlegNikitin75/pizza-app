import { PizzaSize } from '@/constants/pizza'
import { Ingredient, ProductItem } from '@prisma/client'

/**
 * Функция подсчитывает общую стоимость пиццы
 * @param items - список пицц
 * @param size - размер пиццы (20, 30, 40 см)
 * @param allIngredients - все ингридиенты
 * @param selectedIngredients - выбранные ингридиенты
 * @returns  общая стоимость пиццы
 */
export const pizzaCostCalculation = (
	items: ProductItem[],
	size: PizzaSize,
	allIngredients: Ingredient[],
	selectedIngredients: Set<number>
) => {
	const pizzaPrice = items.find(item => item.size === size)?.price || 0

	const totalIngredientsPrice = allIngredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc, ingredient) => acc + ingredient.price, 0)

	const totalPizzaPrice = (pizzaPrice + totalIngredientsPrice).toFixed(2)
	return totalPizzaPrice
}
