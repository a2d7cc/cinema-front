import instance, { axiosClassic } from 'api/interceptors'
import { getActorsUrl, getGenresUrl } from 'config/api.config'

import { IActor } from '@/shared/types/movie.types'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async deleteActor(_id: string) {
		return instance.delete<string>(getActorsUrl(`/${_id}`))
	},
}
