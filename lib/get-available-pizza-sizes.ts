import { pizzaSizesOptions, PizzaType } from '@/constants/pizza'
import { ProductItem } from '@prisma/client'

/**
 * Функция возвращает список доступных размеров пиццы по типу теста
 * @param items - список пицц
 * @param type - тип теста (традиционное или тонкое)
 * @returns список доступных размеров пиццы
 */

export const getAvailablePizzaSizes = (
	items: ProductItem[],
	type: PizzaType
) => {
	const filteredPizzasByType = items.filter(item => item.pizzaType !== type)
	const availablePizzaSizes = pizzaSizesOptions.map(item => ({
		name: item.name,
		value: item.value,
		disabled: !filteredPizzasByType.some(
			pizza => Number(pizza.size) === Number(item.value)
		)
	}))
	return availablePizzaSizes
}
