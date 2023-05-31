import styles from './index.module.scss'

interface Props {
	children: any
}

const Main = function Main({ children }: Props) {
	return <div className={styles.container}>{children}</div>
}

export default Main
