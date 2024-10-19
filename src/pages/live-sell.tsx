import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const SellRoom = dynamic(
	() => import('@/modules/room/application/seller-room/sell-room'),
	{ ssr: false }
)
const Client = dynamic(() => import('@/modules/room/application/client'), {
	ssr: false,
})

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
			<Client>
				<SellRoom />
			</Client>
		</>
	)
}

export default LiveSell
