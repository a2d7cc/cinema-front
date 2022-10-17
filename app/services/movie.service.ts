import { IMovie } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"
import { getMovieUrl } from "config/url.config"

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
}