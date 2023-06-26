import React, { useRef } from 'react'
import Script from 'next/script'
import { ivsConfig } from '@/config/ivs'
import BuyRoomView from './buy-room.view'

const BuyRoom = function BuyRoom() {
	const player = useRef<any>()
	const videoRef = useRef<HTMLVideoElement>(null)

	return (
		<>
			<Script
				src="https://player.live-video.net/1.19.0/amazon-ivs-player.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					// @ts-ignore
					const IVSPackage = window.IVSPlayer
					player.current = IVSPackage.create()

					player.current.attachHTMLVideoElement(
						videoRef.current as HTMLVideoElement
					)
					player.current.load(ivsConfig.playbackUrl)
					player.current.play()
				}}
			/>
			<BuyRoomView videoRef={videoRef} />
		</>
	)
}

export default BuyRoom
