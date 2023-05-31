import React from 'react'
import styles from './button.module.scss'

interface Props {
	children: string
	onClick?: () => void
}

const PrimaryButton = function Button({ children, ...props }: Props) {
	return (
		<button type="button" className={styles.button} {...props}>
			{children}
		</button>
	)
}

export default PrimaryButton
