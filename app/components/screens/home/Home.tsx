import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './Home.interface'

import styles from 'Home.module.scss'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movie online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser"
		>
			<Heading title="Home page" classname="text-gray-300 mb-8 text-xl" />
		</Meta>
	)
}

export default Home
