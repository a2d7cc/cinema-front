import React, { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const UserList: FC = () => {
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
		</Meta>
	)
}

export default UserList
