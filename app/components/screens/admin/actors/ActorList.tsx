import React, { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const ActorList: FC = () => {
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
		</Meta>
	)
}

export default ActorList
