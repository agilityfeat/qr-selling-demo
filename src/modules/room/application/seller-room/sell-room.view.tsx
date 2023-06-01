/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import styles from './sell-room.module.scss'

const SellRoomView = function SellRoomView() {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.videos}>
					<Videos>
						<video
							id="localVideo"
							poster="/icons/logo.svg"
							autoPlay
						/>
					</Videos>
				</div>
				<div className={styles.chat}>
					<Chat messages={['Message 1', 'Message 2', 'Message 3']} />
				</div>
			</Main>
		</>
	)
}

export default SellRoomView
