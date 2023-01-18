import { getMovieUrl } from 'config/url.config'
import { FC } from 'react'

import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Heading from '@/components/ui/heading/Heading'

import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import FavoriteItem from './FavoriteItem'
import styles from './Favorites.module.scss'
import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { favoritesMovies, isLoading } = useFavorites()
	const { user } = useAuth()

	if (!user) return null

	return (
		<Meta title="Favorites">
			<Heading title={'Favorites'} />
			<section className={styles.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={styles.skeletonLoader}
						containerClassName={styles.containerLoader}
					/>
				) : (
					favoritesMovies?.map((movie) => (
						<FavoriteItem
							key={movie._id}
							item={{
								name: movie.title,
								posterPath: movie.bigPoster,
								url: getMovieUrl(movie.slug),
								title: movie.title,
								_id: movie._id,
							}}
						/>
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
