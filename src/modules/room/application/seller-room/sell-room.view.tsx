/* eslint-disable jsx-a11y/media-has-caption */
import React, { use, useState } from 'react'
import Modal from 'react-modal'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import PrimaryButton from '@/components/buttons/primary'
import styles from './sell-room.module.scss'

const SellRoomView = function SellRoomView() {
	const [imgModalIsOpen, setImgModalIsOpen] = useState(false)
	const [qrModalIsOpen, setQrModalIsOpen] = useState(false)

	const toggleModal = function toggleModal(m: string) {
		switch (m) {
			case 'image':
				setImgModalIsOpen((previousState) => !previousState)
				break
			case 'qr':
				setQrModalIsOpen((previousState) => !previousState)
				break
			default:
				break
		}
	}

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
					<PrimaryButton onClick={() => toggleModal('image')}>
						Add Image
					</PrimaryButton>
					<PrimaryButton onClick={() => toggleModal('qr')}>
						Add QR
					</PrimaryButton>
					<PrimaryButton>Clear</PrimaryButton>
					<Chat messages={['Message 1', 'Message 2', 'Message 3']} />
				</div>
			</Main>
			<Modal
				isOpen={imgModalIsOpen}
				onRequestClose={() => toggleModal('image')}
			>
				Add Images
			</Modal>
			<Modal
				isOpen={qrModalIsOpen}
				onRequestClose={() => toggleModal('qr')}
			>
				Add QR
			</Modal>
		</>
	)
}

export default SellRoomView
