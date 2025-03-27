import { CartDTO, CreateCartItemValues } from './dto/cart-item-dto'
import { httpInstance } from './http-instance'

export const getCart = async (): Promise<CartDTO> => {
	return (await httpInstance.get<CartDTO>('/cart')).data
}

export const updateItemQuantity = async (
	itemId: number,
	quantity: number
): Promise<CartDTO> => {
	return (await httpInstance.patch<CartDTO>('/cart/' + itemId, { quantity }))
		.data
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
	return (await httpInstance.delete<CartDTO>('/cart/' + id)).data
}

export const addCartItem = async (
	values: CreateCartItemValues
): Promise<CartDTO> => {
	return (await httpInstance.post<CartDTO>('/cart', values)).data
}
