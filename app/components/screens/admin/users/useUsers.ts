import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'

import { ITableItem } from '@/components/ui/admin-table/AdminTable/AdminTable.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

import { convertMongoDate } from '@/utils/data/convertMongoDate'
import { toastrError } from '@/utils/toastr-error'
import { toastr } from 'react-redux-toastr'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertMongoDate(user.createdAt)],
					})
				),
			onError(error) {
				toastrError(error, 'user list')
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UserService.deleteUser(userId),
		{
			onError(error) {
				toastrError(error, 'Delete user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			}
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync]
	)
}
