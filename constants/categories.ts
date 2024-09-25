import {
	Croissant,
	CupSoda,
	HandPlatter,
	IceCreamBowl,
	Pizza,
	Salad,
	Soup
} from 'lucide-react'

export const CATEGORIES = [
	{ title: 'Пицца', icon: 'Pizza', url:'/pizza' },
	{ title: 'Суши', icon: 'Croissant', url:'/soushi' },
	{ title: 'Напитки', icon: 'CupSoda', url:'/drinks' },
	{ title: 'Закуски', icon: 'Salad', url:'/snacks' },
	{ title: 'Комбо', icon: 'HandPlatter', url:'/combo' },
	{ title: 'Десерты', icon: 'IceCreamBowl', url:'/dessertes' },
	{ title: 'Соусы', icon: 'Soup', url:'/sauce' }
]

export const iconComponents = {
	Pizza,
	Croissant,
	CupSoda,
	Salad,
	HandPlatter,
	IceCreamBowl,
	Soup
}
