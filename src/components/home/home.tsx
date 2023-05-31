import React from 'react'
import { useRouter } from 'next/router'
import PrimaryButton from '@/components/buttons/primary'
import Header from '@/components/header'
import styles from './home.module.scss'

const TITLE = 'Live Sell It!'

const Home = function Home() {
	const router = useRouter()

	return (
		<div className={styles.main}>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.heading}>{TITLE}</h1>
				<PrimaryButton onClick={() => router.push('/live-sell')}>
					Start Selling
				</PrimaryButton>
			</div>
		</div>
	)
}

export default Home
