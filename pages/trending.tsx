import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Trending movies"
			description="Trending movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const movies = await MovieService.getMostPopularMovies()
		return {
			props: { movies },
			revalidate: 60,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default TrendingPage
