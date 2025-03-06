import { Product } from '@prisma/client'

import { ApiRoutes } from './constants'
import { httpInstance } from './http-instance'

export const search = async (query: string): Promise<Product[]> => {
	const { data } = await httpInstance.get<Product[]>(
		ApiRoutes.SEARCH_PRODUCTS,
		{
			params: { query }
		}
	)
	return data
}
