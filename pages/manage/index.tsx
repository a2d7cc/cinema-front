import { NextPage } from 'next'
import React from 'react'

import { NextPageAuth } from '@/shared/types/auth.types'
import Admin from '@/components/screens/admin/Admin'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
