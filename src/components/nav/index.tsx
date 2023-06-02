import React from 'react'
import Avatar from 'react-avatar'
import styles from './nav.module.scss'
import NavItem from './navItem'

const MENU_LIST = [
	{ text: 'Sell', href: '/live-sell' },
	{ text: 'Buy', href: '/live-buy' },
]

const Nav = function Nav() {
	return (
		<div className={styles.container}>
			{MENU_LIST.map((menu) => (
				<NavItem key={menu.text} {...menu} />
			))}
			<p className={styles.navItem}>Jane Doe</p>
			<Avatar className={styles.avatar} round size="40" name="Jane Doe" />
		</div>
	)
}

export default Nav
