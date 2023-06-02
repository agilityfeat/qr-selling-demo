import React, { ReactNode } from 'react'
import styles from './iconbutton.module.scss'

interface IconButtonProps {
	icon: ReactNode
	onClick?: () => void
}

const IconButton = function IconButton({
	icon,
	onClick,
}: IconButtonProps): JSX.Element {
	return (
		<button className={styles.iconButton} type="button" onClick={onClick}>
			{icon}
		</button>
	)
}

export default IconButton
