import type { NextPage } from 'next'
import Head from 'next/head'
import BuyRoom from '@/modules/room/application/buyer-room/buy-room'

const LiveBuy: NextPage = function LiveBuy() {
	return (
		<>
			<Head>
				<title>
					{process.env.title ||
						'WebRTC.ventures live selling example'}
				</title>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="WebRTC.ventures live selling example"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BuyRoom />
		</>
	)
}

export default LiveBuy
