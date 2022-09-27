import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { IHome } from './Home.interface'

import styles from 'Home.module.scss'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home page</h1>
		</Layout>
	)
}

export default Home
