import { get } from 'http'
import { Variant } from '@/components/shared/variants-selector'
import { PizzaSize, PizzaType } from '@/constants/pizza'
import { getAvailablePizzaSizes } from '@/lib'
import { ProductItem } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'

interface ReturnProps {
	size: PizzaSize
	type: PizzaType
	setSize: (size: PizzaSize) => void
	setType: (type: PizzaType) => void
	addIngredient: (id: number) => void
	selectedIngredients: Set<number>
	availablePizzaSizes: Variant[]
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
	const [size, setSize] = useState<PizzaSize>(30)
	const [type, setType] = useState<PizzaType>(2)
	const [selectedIngredients, { toggle: addIngredient }] = useSet(
		new Set<number>([])
	)
	const availablePizzaSizes = getAvailablePizzaSizes(items, type)

	useEffect(() => {
		const isAvailableSize = availablePizzaSizes?.find(
			item => Number(item.value) === size && !item.disabled
		)
		const availablePrimarySize = availablePizzaSizes?.find(
			item => !item.disabled
		)
		if (!isAvailableSize && availablePrimarySize)
			setSize(Number(availablePrimarySize.value) as PizzaSize)
	}, [availablePizzaSizes, size])
	return {
		size,
		type,
		setSize,
		setType,
		selectedIngredients,
		addIngredient,
		availablePizzaSizes
	}
}
