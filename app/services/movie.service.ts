import instance, { axiosClassic } from 'api/interceptors'
import { getMoviesUrl } from 'config/api.config'

import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movie.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.put(getMoviesUrl('/update-count-opened'), {
			slug,
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},

	async getMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},

	async create() {
		return instance.post<string>(getMoviesUrl(''))
	},

	async update(_id: string, data: IMovieEditInput) {
		return instance.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async getById(_id: string) {
		return instance.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async delete(_id: string) {
		return instance.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
