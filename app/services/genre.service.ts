import instance, { axiosClassic } from 'api/interceptors'
import { getGenresUrl } from 'config/api.config'

import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movie.types'
import { ICollection } from '@/components/screens/collections/collections.types'

export const GenreService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},

	async create() {
		return instance.post<string>(getGenresUrl(''))
	},

	async update(_id: string, data: IGenreEditInput) {
		return instance.put<string>(getGenresUrl(`/${_id}`), data)
	},

	async delete(_id: string) {
		return instance.delete<string>(getGenresUrl(`/${_id}`))
	},

	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},

	async getById(_id: string) {
		return instance.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async getPopularGenres(limit: number = 4) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(`/popular`), {
			params: {
				limit,
			},
		})
	},
}
