/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import styles from './buy-room.module.scss'

interface Props {
	videoRef: React.RefObject<HTMLVideoElement>
}

const BuyRoomView = function BuyRoomView({ videoRef }: Props) {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.videos}>
					<Videos>
						<video id="localVideo" autoPlay ref={videoRef} />
					</Videos>
				</div>
				<div className={styles.chat}>
					<Chat messages={['Message 1', 'Message 2', 'Message 3']} />
				</div>
			</Main>
		</>
	)
}

export default BuyRoomView
