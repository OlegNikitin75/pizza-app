import { Categories, SortPopup } from '.'
import { Container } from './container'

export const TopBar = () => {
	return (
		<div className='sticky top-0 bg-white py-5 z-10'>
			<Container className='mt-4'>
				<Categories />
			</Container>
		</div>
	)
}
