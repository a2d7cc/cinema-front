import { IUser } from "@/shared/types/user.types"
import instance from "api/interceptors"
import axios from "axios"
import { GetUsersUrl } from "config/api.config"

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

	async deleteUser(_id: string) {
		return instance.delete<string>(GetUsersUrl(`/${_id}`))
	}
}
