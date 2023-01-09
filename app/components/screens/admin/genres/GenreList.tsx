import React, { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const GenreList: FC = () => {
	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
		</Meta>
	)
}

export default GenreList
