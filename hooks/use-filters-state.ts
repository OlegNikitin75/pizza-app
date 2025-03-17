import {  useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useSet } from 'react-use'

interface IPropsInputRange {
	priceFrom?: number
	priceTo?: number
}

export interface IQueryFilters extends IPropsInputRange {
	sizes: string
	types: string
	ingredients: string
}
export interface IFilters {
	selectedIngredients: Set<string>
	sizes: Set<string>
	types: Set<string>
	priceRange: IPropsInputRange
}

interface ReturnProps extends IFilters {
	setPriceRange: (name: keyof IPropsInputRange, value: number) => void
	setTypes: (value: string) => void
	setSizes: (value: string) => void
	setIngredients: (value: string) => void
}

export const useFiltersState = (): ReturnProps => {


	const searchParams = useSearchParams() as unknown as Map<
		keyof IQueryFilters,
		string
	>

	const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(','))
	)

	const [sizes, { toggle: toggleSizes }] = useSet<string>(
		searchParams.get('sizes')
			? new Set(searchParams.get('sizes')?.split(','))
			: new Set([])
	)
	const [types, { toggle: toggleTypes }] = useSet<string>(
		searchParams.get('types')
			? new Set(searchParams.get('types')?.split(','))
			: new Set([])
	)
	const [priceRange, setPriceRange] = useState<IPropsInputRange>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined
	})
	const updatePrice = (name: keyof IPropsInputRange, value: number) => {
		setPriceRange(prev => ({ ...prev, [name]: value }))
	}

	return {
		selectedIngredients,
		sizes,
		types,
		priceRange,
		setTypes: toggleTypes,
		setSizes: toggleSizes,
		setPriceRange: updatePrice,
		setIngredients: toggleIngredients
	}
}
