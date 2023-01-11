import instance, { axiosClassic } from 'api/interceptors'
import { getMovieUrl } from 'config/url.config'

import { IMovie } from '@/shared/types/movie.types'

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

	async deleteMovie(_id: string) {
		return instance.delete<string>(getMovieUrl(`/${_id}`))
	},
}
