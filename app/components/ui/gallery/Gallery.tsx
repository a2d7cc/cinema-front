import { FC, WheelEvent } from 'react'

import styles from './Gallery.module.scss'
import GalleryItem from './GalleryItem'
import { IGalleryItem } from './gallery.types'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem key={item.url} item={item} variant="vertical" />
			))}
		</div>
	)
}

export default Gallery
