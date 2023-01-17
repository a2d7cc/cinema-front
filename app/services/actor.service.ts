import instance, { axiosClassic } from 'api/interceptors'
import { getActorsUrl, getGenresUrl } from 'config/api.config'

import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'

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

	async create() {
		return instance.post<string>(getActorsUrl(''))
	},

	async update(_id: string, data: IActorEditInput) {
		return instance.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return instance.delete<string>(getActorsUrl(`/${_id}`))
	},

	async getById(_id: string) {
		return instance.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
}
