import { FC } from 'react'

interface IProductPageProps {
	params: {
		id: string
	}
}

const ProductPage: FC<IProductPageProps> = ({ params }) => {
	return <div>{params.id}</div>
}
export default ProductPage
