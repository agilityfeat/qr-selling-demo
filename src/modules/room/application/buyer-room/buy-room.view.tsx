/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import { Message } from '@/components/chat/useChat'
import styles from './buy-room.module.scss'

interface Props {
	videoRef: React.RefObject<HTMLVideoElement>
	playerState: string
	chatMessages: Message[]
	sendChatMessages: (text: string) => void
}

const BuyRoomView = function BuyRoomView({
	videoRef,
	playerState,
	chatMessages,
	sendChatMessages,
}: Props) {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.videos}>
					<Videos>
						{playerState === 'Ended' ? (
							'This stream has ended'
						) : (
							<video id="localVideo" ref={videoRef} />
						)}
					</Videos>
				</div>
				<div className={styles.chat}>
					<Chat
						messages={chatMessages}
						sendMessage={sendChatMessages}
					/>
				</div>
			</Main>
		</>
	)
}

export default BuyRoomView
