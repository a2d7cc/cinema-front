import React from 'react'
import Menu from '../Menu'
import { usePopularGenres } from './UsePopularGenres'
import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu = () => {
	const {isLoading, data} = usePopularGenres()
	return isLoading ? <div className='mx-11 mb-6'><SkeletonLoader count={5} className='h-7 mt-6' /></div>:
				<Menu menu={{title: 'Popular genres', items: data || []}} />
}

export default GenreMenu