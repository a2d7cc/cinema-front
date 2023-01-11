import { NextPage } from 'next'
import React from 'react'

import { NextPageAuth } from '@/shared/types/auth.types'
import MoviesList from '@/components/screens/admin/movies/MoviesList'

const MovieListPage: NextPageAuth = () => {
	return <MoviesList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
