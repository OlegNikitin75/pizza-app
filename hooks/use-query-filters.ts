import { useRouter } from 'next/navigation'
import qs from 'qs'
import { useEffect } from 'react'

import { IFilters } from './use-filters-state'

export const useQueryFilters = (filters: IFilters) => {
	const router = useRouter()
	useEffect(() => {
		const params = {
			...filters.priceRange,
			sizes: Array.from(filters.sizes),
			types: Array.from(filters.types),
			ingredients: Array.from(filters.selectedIngredients)
		}
		const query = qs.stringify(params, { arrayFormat: 'comma' })

		router.push(`?${query}`, { scroll: false })
	}, [filters, router])
}
