'use client'

import AgoraRTC, { AgoraRTCProvider } from 'agora-rtc-react'

interface Props {
	children: any
}

const Client = function ({ children }: Props) {
	const client = AgoraRTC.createClient({
		mode: 'live',
		codec: 'vp8',
	})

	return <AgoraRTCProvider client={client}>{children}</AgoraRTCProvider>
}

export default Client
