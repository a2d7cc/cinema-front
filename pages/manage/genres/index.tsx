import { NextPage } from 'next';
import React from 'react';



import { NextPageAuth } from '@/shared/types/auth.types';
import ActorList from '@/components/screens/admin/Actors/ActorList';
import GenreList from '@/components/screens/admin/genres/GenreList';


const GenreListPage: NextPageAuth = () => {
	return <GenreList />
}

GenreListPage.isOnlyAdmin = true

export default GenreListPage