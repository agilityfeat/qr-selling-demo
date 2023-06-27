import React, { useRef, useState } from 'react'
import Script from 'next/script'
import { ivsConfig } from '@/config/ivs'
import BuyRoomView from './buy-room.view'

const BuyRoom = function BuyRoom() {
	const player = useRef<any>()
	const videoRef = useRef<HTMLVideoElement>(null)

	const [playerState, setPlayerState] = useState<any>()

	return (
		<>
			<Script
				src="https://player.live-video.net/1.19.0/amazon-ivs-player.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					// @ts-ignore
					const IVSPlayerPackage = window.IVSPlayer
					const { PlayerState } = IVSPlayerPackage

					setPlayerState(PlayerState.IDLE)

					player.current = IVSPlayerPackage.create()
					player.current.attachHTMLVideoElement(
						videoRef.current as HTMLVideoElement
					)

					player.current.addEventListener(PlayerState.ENDED, () =>
						setPlayerState(PlayerState.ENDED)
					)

					player.current.setAutoplay(true)
					player.current.load(ivsConfig.playbackUrl)
					player.current.setVolume(0.5)
				}}
			/>
			<BuyRoomView videoRef={videoRef} playerState={playerState} />
		</>
	)
}

export default BuyRoom
