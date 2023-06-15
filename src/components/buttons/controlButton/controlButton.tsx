import React, { ReactNode } from 'react'
import styles from './controlbutton.module.scss'

interface ControlButtonProps {
	icon: ReactNode
	onClick?: () => void
}

const ControlButton = function ControlButton({
	icon,
	onClick,
}: ControlButtonProps): JSX.Element {
	return (
		<button className={styles.button} type="button" onClick={onClick}>
			{icon}
		</button>
	)
}

export default ControlButton
