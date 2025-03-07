import { Ingredient } from '@prisma/client'

import { ApiRoutes } from './constants'
import { httpInstance } from './http-instance'

export const getAll = async (): Promise<Ingredient[]> => {
	const { data } = await httpInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)
	return data
}
