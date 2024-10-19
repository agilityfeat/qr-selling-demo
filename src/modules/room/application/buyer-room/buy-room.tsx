'use client'

import React, { useRef, useState } from 'react'
import Script from 'next/script'
import useChat from '@/components/chat/useChat'
import { ivsConfig } from '@/config/ivs'
import { useRemoteUsers } from 'agora-rtc-react'
import BuyRoomView from './buy-room.view'

const BuyRoom = function BuyRoom() {
	const remoteUsers = useRemoteUsers()

	const player = useRef<any>()
	const videoRef = useRef<HTMLVideoElement>(null)

	const [playerState, setPlayerState] = useState<any>()

	const { messages, sendMessage } = useChat()

	return (
		<BuyRoomView
			videoRef={videoRef}
			playerState={playerState}
			remoteUsers={remoteUsers}
			chatMessages={messages}
			sendChatMessages={sendMessage}
		/>
	)
}

export default BuyRoom
