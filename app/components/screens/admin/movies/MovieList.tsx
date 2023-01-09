import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import React, { FC } from 'react'

const MovieList: FC = () => {
	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
		</Meta>
	)
}

export default MovieList
