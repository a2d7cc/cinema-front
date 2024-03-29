import dynamic from 'next/dynamic'
import React from 'react'

import PopularMovies from './PopularMovies'

const DynamicFavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies />
			<DynamicFavoriteMovies />
		</div>
	)
}

export default MoviesContainer
