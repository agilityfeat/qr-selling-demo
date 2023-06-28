/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import { ivsConfig } from '@/config/ivs'
import styles from './buy-room.module.scss'

interface Props {
	videoRef: React.RefObject<HTMLVideoElement>
	playerState: string
}

const BuyRoomView = function BuyRoomView({ videoRef, playerState }: Props) {
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
					<Chat chatToken={ivsConfig.chatTokenBuyer} />
				</div>
			</Main>
		</>
	)
}

export default BuyRoomView
