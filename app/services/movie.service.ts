import instance, { axiosClassic } from 'api/interceptors'
import { getMovieUrl } from 'config/url.config'

import { IMovie } from '@/shared/types/movie.types'
import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMovieUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMovieUrl('/most-popular')
		)
		return movies
	},

	async create() {
		return instance.post<string>(getMovieUrl(''))
	},

	async update(_id: string, data: IMovieEditInput) {
		return instance.put<string>(getMovieUrl(`/${_id}`), data)
	},

	async getById(_id: string) {
		return instance.get<IMovieEditInput>(getMovieUrl(`/${_id}`))
	},

	async delete(_id: string) {
		return instance.delete<string>(getMovieUrl(`/${_id}`))
	},
}
