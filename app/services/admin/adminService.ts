import instance from 'api/interceptors'
import { GetUsersUrl } from 'config/api.config'

export const AdminService = {
	async getCountUsers() {
		return instance.get<number>(GetUsersUrl('/count'))
	},
}
