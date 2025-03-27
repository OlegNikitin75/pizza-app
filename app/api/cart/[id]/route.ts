import { updateCartTotalAmount } from '@/lib'
import { prisma } from '@/prisma/prisma-client'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
	req: NextRequest,
	{
		params
	}: {
		params: Promise<{ id: string }>
	}
) {
	try {
		const { id } = await params
		const data = (await req.json()) as { quantity: number }
		const token = '11111'
		//const token = req.cookies.get('cartToken')?.value
		if (!token) {
			return NextResponse.json(
				{ error: 'Cart token is not found' },
				{ status: 401 }
			)
		}
		const cartItem = await prisma.cartItem.findFirst({
			where: {
				cart: {
					token
				},
				id: Number(id)
			}
		})
		if (!cartItem) {
			return NextResponse.json(
				{ error: 'Cart item not found' },
				{ status: 404 }
			)
		}
		await prisma.cartItem.update({
			where: {
				id: Number(id)
			},
			data: {
				quantity: data.quantity
			}
		})
		const updatedUserCart = updateCartTotalAmount('11111')
		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_PATCH] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось обновить товар' },
			{ status: 500 }
		)
	}
}
export async function DELETE(
	req: NextRequest,
	{
		params
	}: {
		params: Promise<{ id: string }>
	}
) {
	try {
		const { id } = await params
		//const token = req.cookies.get('cartToken')?.value
		const token = '11111'
		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' })
		}

		const cartItem = await prisma.cartItem.findFirst({
			where: {
				id: Number(id)
			}
		})

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart item not found' })
		}

		await prisma.cartItem.delete({
			where: {
				id: Number(id)
			}
		})

		const updatedUserCart = await updateCartTotalAmount(token)

		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_DELETE] Server error', error)
		return NextResponse.json(
			{ message: 'Не удалось удалить корзину' },
			{ status: 500 }
		)
	}
}
