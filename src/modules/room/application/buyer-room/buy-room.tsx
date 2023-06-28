import React, { useRef, useState } from 'react'
import Script from 'next/script'
import useChat from '@/components/chat/useChat'
import { ivsConfig } from '@/config/ivs'
import BuyRoomView from './buy-room.view'

const BuyRoom = function BuyRoom() {
	const player = useRef<any>()
	const videoRef = useRef<HTMLVideoElement>(null)

	const [playerState, setPlayerState] = useState<any>()

	const { messages, sendMessage } = useChat(
		ivsConfig.chatTokenBuyer,
		ivsConfig.chatMessagingEndpoint
	)

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
			<BuyRoomView
				videoRef={videoRef}
				playerState={playerState}
				chatMessages={messages}
				sendChatMessages={sendMessage}
			/>
		</>
	)
}

export default BuyRoom
