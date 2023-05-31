import React from 'react'
import PrimaryButton from '@/components/buttons/primary'
import Header from '@/components/header'
import styles from './home.module.scss'

const TITLE = 'Live Sell It!'

const Home = function Home() {
	return (
		<div className={styles.main}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.heading}>{TITLE}</h1>
				<PrimaryButton>Start Selling</PrimaryButton>
			</div>
		</div>
	)
}

export default Home
