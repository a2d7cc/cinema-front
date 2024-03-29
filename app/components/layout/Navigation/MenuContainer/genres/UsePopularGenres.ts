import { getGenreUrl } from 'config/url.config'
import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { toastrError } from '@/utils/toastr-error'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genres menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.filter((genre) => genre.icon)
					.map(
						(genre): IMenuItem => ({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						})
					)
					.splice(0, 4),
			onError(error) {
				toastrError(error, 'Popular genres menu')
			},
		}
	)

	return queryData
}
