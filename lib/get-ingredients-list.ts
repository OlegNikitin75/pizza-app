import { Ingredient } from '@prisma/client'

export 	const getIngredientsList = (ingredients: Ingredient[]) => {
	let str = ''
	ingredients.forEach(ingredient => {
		str += ingredient.name + ', '
	})
	return str.slice(0, -2)
}