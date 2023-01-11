import cn from 'classnames'
import { FC, forwardRef } from 'react'

import styles from './form.module.scss'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={styles}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
