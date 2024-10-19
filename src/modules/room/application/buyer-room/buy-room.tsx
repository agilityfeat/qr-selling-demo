import React, { useRef, useState } from 'react'
import Script from 'next/script'
import useChat from '@/components/chat/useChat'
import { ivsConfig } from '@/config/ivs'
import BuyRoomView from './buy-room.view'
import { useRemoteUsers } from 'agora-rtc-react'

const BuyRoom = function BuyRoom() {
	const remoteUsers = useRemoteUsers();

	const player = useRef<any>()
	const videoRef = useRef<HTMLVideoElement>(null)

	const [playerState, setPlayerState] = useState<any>()

	const { messages, sendMessage } = useChat(
		ivsConfig.chatTokenBuyer,
		ivsConfig.chatMessagingEndpoint
	)

	return (
		<>
			<BuyRoomView
				videoRef={videoRef}
				playerState={playerState}
				remoteUsers={remoteUsers}
				chatMessages={messages}
				sendChatMessages={sendMessage}
			/>
		</>
	)
}

export default BuyRoom
