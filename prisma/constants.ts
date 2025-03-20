export const categories = [
	{ name: 'Пицца' },
	{ name: 'Комбо' },
	{ name: 'Закуски' },
	{ name: 'Десерты' },
	{ name: 'Напитки' },
	{ name: 'Соусы' }
]
export const _ingredients = [
	{
		name: 'Сырный бортик',
		price: 5,
		imageUrl: '/images/products/ingredients/ingredient-1.png'
	},
	{
		name: 'Сыр моцарелла',
		price: 2.21,
		imageUrl: '/images/products/ingredients/ingredient-2.png'
	},
	{
		name: 'Сыр чеддер',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-8.png'
	},
	{
		name: 'Сыр пармезан',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-8_1.png'
	},
	{
		name: 'Голубой сыр',
		price: 3.39,
		imageUrl: '/images/products/ingredients/ingredient-12.png'
	},
	{
		name: 'Фета',
		price: 3.19,
		imageUrl: '/images/products/ingredients/ingredient-13.png'
	},
	{
		name: 'Бекон',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-6.png'
	},
	{
		name: 'Пепперони',
		price: 3.19,
		imageUrl: '/images/products/ingredients/ingredient-7.png'
	},
	{
		name: 'Курица',
		price: 3.19,
		imageUrl: '/images/products/ingredients/ingredient-9.png'
	},
	{
		name: 'Ветчина',
		price: 3.39,
		imageUrl: '/images/products/ingredients/ingredient-11.png'
	},
	{
		name: 'Креветки',
		price: 3.39,
		imageUrl: '/images/products/ingredients/ingredient-17.png'
	},
	{
		name: 'Шампиньоны',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-10.png'
	},
	{
		name: 'Халапеньо',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-3.png'
	},
	{
		name: 'Томаты',
		price: 1.2,
		imageUrl: '/images/products/ingredients/ingredient-4.png'
	},
	{
		name: 'Огурцы',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-14.png'
	},
	{
		name: 'Лук',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-15.png'
	},
	{
		name: 'Шпинат',
		price: 2.19,
		imageUrl: '/images/products/ingredients/ingredient-19.png'
	},
	{
		name: 'Ананасы',
		price: 3.19,
		imageUrl: '/images/products/ingredients/ingredient-16.png'
	},
	{
		name: 'Сладкий перец',
		price: 2.89,
		imageUrl: '/images/products/ingredients/ingredient-20.png'
	},
	{
		name: 'Томатный соус',
		price: 1.29,
		imageUrl: '/images/products/ingredients/ingredient-5.png'
	},
	{
		name: 'Соус Ранч',
		price: 2.58,
		imageUrl: '/images/products/ingredients/ingredient-18.png'
	},
	{
		name: 'Соус барбекю',
		price: 1.72,
		imageUrl: '/images/products/ingredients/ingredient-21.png'
	}
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	//Комбо
	{
		name: '2 средних пиццы',
		imageUrl: '/images/products/combo/combo-1.png',
		categoryId: 2
	},
	{
		name: '2 средних пиццы и напиток',
		imageUrl: '/images/products/combo/combo-2.png',
		categoryId: 2
	},
	{
		name: '2 большие пиццы Карбонара и Пепперони',
		imageUrl: '/images/products/combo/combo-3.png',
		categoryId: 2
	},
	{
		name: 'Средняя мясная пицца и 2 закуски',
		imageUrl: '/images/products/combo/combo-4.png',
		categoryId: 2
	},
	{
		name: '4 закуски на выбор',
		imageUrl: '/images/products/combo/combo-5.png',
		categoryId: 2
	},
	//Закуски
	{
		name: 'Наггетс бокс',
		imageUrl: '/images/products/snacks/snack-1.png',
		categoryId: 3
	},
	{
		name: 'Наггетсы',
		imageUrl: '/images/products/snacks/snack-6.png',
		categoryId: 3
	},
	{
		name: 'Биг Чикен бокс',
		imageUrl: '/images/products/snacks/snack-2.png',
		categoryId: 3
	},
	{
		name: 'Салат Цезарь',
		imageUrl: '/images/products/snacks/snack-3.png',
		categoryId: 3
	},
	{
		name: 'Салат Греческий',
		imageUrl: '/images/products/snacks/snack-4.png',
		categoryId: 3
	},
	{
		name: 'Крылья куриные',
		imageUrl: '/images/products/snacks/snack-5.png',
		categoryId: 3
	},
	{
		name: 'Драники+сметана',
		imageUrl: '/images/products/snacks/snack-7.png',
		categoryId: 3
	},
	{
		name: 'Картофельные дольки',
		imageUrl: '/images/products/snacks/snack-8.png',
		categoryId: 3
	},
	{
		name: 'Додстер',
		imageUrl: '/images/products/snacks/snack-9.png',
		categoryId: 3
	},

	//Десерты
	{
		name: 'Мороженое Soletto. Кедровый орех и гауда',
		imageUrl: '/images/products/desserts/dessert-1.png',
		categoryId: 4
	},
	{
		name: 'Мороженое Soletto. Грецкий орех и кленовый сироп',
		imageUrl: '/images/products/desserts/dessert-2.png',
		categoryId: 4
	},
	{
		name: 'Штрудель со смородиной',
		imageUrl: '/images/products/desserts/dessert-3.png',
		categoryId: 4
	},
	{
		name: 'Штрудель с яблоками и корицей',
		imageUrl: '/images/products/desserts/dessert-4.png',
		categoryId: 4
	},
	{
		name: 'Шоколадные роллы',
		imageUrl: '/images/products/desserts/dessert-5.png',
		categoryId: 4
	},
	{
		name: 'Крем роллы',
		imageUrl: '/images/products/desserts/dessert-6.png',
		categoryId: 4
	},
	//Напитки
	{
		name: 'Нектар апельсиновый',
		imageUrl: '/images/products/drinks/drink-1.png',
		categoryId: 5
	},
	{
		name: 'Сок яблочный',
		imageUrl: '/images/products/drinks/drink-2.png',
		categoryId: 5
	},
	{
		name: 'Кофе Латте',
		imageUrl: '/images/products/drinks/drink-3.png',
		categoryId: 5
	},
	{
		name: 'Кофе Американо',
		imageUrl: '/images/products/drinks/drink-4.png',
		categoryId: 5
	},
	{
		name: 'Чай облепиха с тимьяном',
		imageUrl: '/images/products/drinks/drink-5.png',
		categoryId: 5
	},
	{
		name: 'Чай клюква с имбирем',
		imageUrl: '/images/products/drinks/drink-6.png',
		categoryId: 5
	},
  	//Соусы
	{
		name: 'Соус кисло-сладкий',
		imageUrl: '/images/products/souses/souse-1.png',
		categoryId: 6
	},
  {
		name: 'Соус сырный',
		imageUrl: '/images/products/souses/souse-2.png',
		categoryId: 6
	},
  {
		name: 'Соус Цезарь',
		imageUrl: '/images/products/souses/souse-3.png',
		categoryId: 6
	},
  {
		name: 'Соус горчичный',
		imageUrl: '/images/products/souses/souse-4.png',
		categoryId: 6
	},
  {
		name: 'Соус чесночный',
		imageUrl: '/images/products/souses/souse-5.png',
		categoryId: 6
	},
  {
		name: 'Соус томатный',
		imageUrl: '/images/products/souses/souse-6.png',
		categoryId: 6
	},
]
