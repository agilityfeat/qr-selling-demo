import React from 'react'
import styles from './error.module.scss'

interface Props {
	error: string
}

const Error = function err({ error }: Props) {
	return error ? <div className={styles.error}>{error}</div> : null
}

export default Error
