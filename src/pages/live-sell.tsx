import type { NextPage } from 'next'
import Head from 'next/head'
import SellRoom from '@/modules/room/application/seller-room/sell-room'

const LiveSell: NextPage = function LiveSell() {
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
			<SellRoom />
		</>
	)
}

export default LiveSell
