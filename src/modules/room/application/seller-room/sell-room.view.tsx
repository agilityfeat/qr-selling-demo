/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import Header from '@/components/header'
import Main from '@/components/main'
import styles from './sell-room.module.scss'

const SellRoomView = function SellRoomView() {
	return (
		<>
			<Header />
			<Main>
				<div className={styles.container}>
					<div className={styles.videos}>
						<video id="localVideo" autoPlay></video>
					</div>
					<div className={styles.chat}>
						<input
							type="file"
							id="image"
							placeholder="Add an image..."
							accept="image/*"
						/>
						<input
							id="announcement"
							type="text"
							placeholder="Make an anoouncement..."
						/>
						<button id="announcementBtn">Announce</button>
						<button id="qrBtn">Make QR</button>
						<button id="clsAnnouncementBtn">Clear</button>
						<input
							id="chatText"
							type="text"
							placeholder="Write a message..."
						/>
						<button id="chatBtn">Send</button>
					</div>
				</div>
			</Main>
		</>
	)
}

export default SellRoomView
