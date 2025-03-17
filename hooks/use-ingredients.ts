import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

export const useIngredients = () => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])

	useEffect(() => {
		async function fetchIngredients() {
			try {
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
			} catch (error) {
				console.log(error)
			}
		}
		fetchIngredients()
	}, [])
	return { ingredients }
}
