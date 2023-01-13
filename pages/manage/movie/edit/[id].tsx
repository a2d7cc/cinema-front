import { NextPage } from 'next';
import React from 'react';



import { NextPageAuth } from '@/shared/types/auth.types';
import MovieEdit from '@/components/screens/admin/movie/MovieEdit';


const MovieEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

MovieEditPage.isOnlyAdmin = true

export default MovieEditPage