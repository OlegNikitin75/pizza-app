import { Categories, FiltersMenu, SortPopup } from '.'
import { Container } from './container'

export const TopBar = () => {
	return (
		<div className='sm:sticky top-0 bg-white py-2 sm:py-5 z-10 '>
			<Container className='mt-4 flex justify-between flex-wrap gap-4'>
				<Categories />
				<SortPopup />
				<FiltersMenu/>
			</Container>
		</div>
	)
}
