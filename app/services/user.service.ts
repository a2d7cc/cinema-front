import instance from 'api/interceptors'
import { GetUsersUrl } from 'config/api.config'

import { IProfileInput } from '@/components/screens/profile/Profile.interface'

import { IUser } from '@/shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return instance.get<IUser[]>(GetUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getProfile() {
		return instance.get<IUser>(GetUsersUrl('/profile'))
	},

	async updateProfile(data: IProfileInput) {
		return instance.put<string>(GetUsersUrl('/profile'), data)
	},

	async getUser(_id: string) {
		return instance.get<IUser>(GetUsersUrl(`/${_id}`))
	},

	async updateUser(_id: string, data: IProfileInput) {
		return instance.put<string>(GetUsersUrl(`/${_id}`), data)
	},

	async deleteUser(_id: string) {
		return instance.delete<string>(GetUsersUrl(`/${_id}`))
	},
}
