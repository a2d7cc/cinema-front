import cn from 'classnames'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import Banner from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import { IGalleryItem } from '@/components/ui/gallery/gallery.types'
import SubHeading from '@/components/ui/heading/SubHeading'

import { IMovie } from '@/shared/types/movie.types'

import Meta from '@/utils/meta/Meta'

import Content from './Content/Content'
import './SingleMovie.module.scss'

export interface IMoviePage {
	movie: IMovie
	similarMovies: IGalleryItem[]
}

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie slug={movie.slug} _id={movie._id} />
		</Meta>
	)
}

export default SingleMovie
