import { NextPage } from 'next';
import React from 'react';



import { NextPageAuth } from '@/shared/types/auth.types';
import ActorList from '@/components/screens/admin/actors/ActorList';


const ActorListPage: NextPageAuth = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage