import { Api } from '@/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

type IngredientItem = Pick<Ingredient, 'id' | 'name'>

interface ReturnProps {
	ingredients: IngredientItem[]
	selectedIds: Set<string>
	onAddId: (id: string) => void
}
export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<ReturnProps['ingredients']>([])
	const [selectedIds, { toggle }] = useSet<string>(new Set([]));

	useEffect(() => {
		async function fetchIngredients() {
			try {
				const ingredients = await Api.ingredients.getAll()
				setIngredients(
					ingredients.map(ingredient => ({
						id: ingredient.id,
						name: ingredient.name
					}))
				)
			} catch (error) {
				console.log(error)
			}
		}
		fetchIngredients()
	}, [])
	return { ingredients,onAddId: toggle, selectedIds }
}
