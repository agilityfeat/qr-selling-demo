import React from 'react'
import Avatar from 'react-avatar'
import classNames from 'classnames'
import styles from './nav.module.scss'

const Nav = function Nav() {
	return (
		<div className={styles.container}>
			<p className={classNames(styles.navItem, styles.navItemActive)}>
				Sell
			</p>
			<p className={styles.navItem}>Buy</p>
			<p className={styles.navItem}>Jane Doe</p>
			<Avatar className={styles.avatar} round size="40" name="Jane Doe" />
		</div>
	)
}

export default Nav
