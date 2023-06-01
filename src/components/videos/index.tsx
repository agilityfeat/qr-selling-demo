import React from 'react'
import styles from './videos.module.scss'

interface Props {
	children: any
}

const Videos = function Videos({ children }: Props) {
	return <div className={styles.container}>{children}</div>
}

export default Videos
