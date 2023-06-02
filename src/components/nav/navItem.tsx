import Link from 'next/link'
import classNames from 'classnames'
import styles from './nav.module.scss'

interface Props {
	text: string
	href: string
}

const NavItem = function NavItem({ text, href }: Props) {
	return (
		<Link href={href}>
			<button
				type="button"
				className={classNames(styles.buttonLikeLink, styles.navItem)}
			>
				{text}
			</button>
		</Link>
	)
}

export default NavItem
