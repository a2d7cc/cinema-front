import { NextPageAuth } from '@/shared/types/auth.types'
import { NextPage } from 'next'
import React from 'react'

const AdminPage: NextPageAuth = () => {
	return (
		<div>AdminPage</div>
	)
}

AdminPage.isOnlyAdmin = true

export default AdminPage