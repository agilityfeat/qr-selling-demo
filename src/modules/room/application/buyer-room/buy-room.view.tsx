/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import { Message } from '@/components/chat/useChat'
import styles from './buy-room.module.scss'
import { IAgoraRTCRemoteUser, RemoteUser } from 'agora-rtc-react'

interface Props {
	videoRef: React.RefObject<HTMLVideoElement>
	playerState: string
	remoteUsers: IAgoraRTCRemoteUser[]
	chatMessages: Message[]
	sendChatMessages: (text: string) => void
}

const BuyRoomView = function BuyRoomView({
	videoRef,
	playerState,
	remoteUsers,
	chatMessages,
	sendChatMessages,
}: Props) {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.videos}>
					<Videos>
						{remoteUsers.map(user => (
							<div className="user" key={user.uid}>
								<RemoteUser user={user}>
									<samp className="user-name">{user.uid}</samp>
								</RemoteUser>
							</div>
						))}
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
