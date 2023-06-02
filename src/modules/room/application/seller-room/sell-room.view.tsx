/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaImage, FaQrcode, FaBroom } from 'react-icons/fa'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import ImageForm from '@/components/forms/image'
import IconButton from '@/components/buttons/iconButton/iconButton'
import QRCodeForm from '@/components/forms/qr'
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
				<div className={styles.controls}>
					<div className={styles.buttons}>
						<IconButton
							onClick={() => toggleModal('image')}
							icon={<FaImage />}
						/>
						<IconButton
							onClick={() => toggleModal('qr')}
							icon={<FaQrcode />}
						/>
						<IconButton icon={<FaBroom />} />
					</div>
					<Chat messages={['Message 1', 'Message 2', 'Message 3']} />
				</div>
			</Main>
			<Modal
				isOpen={imgModalIsOpen}
				onRequestClose={() => toggleModal('image')}
				className={styles.modal}
			>
				<ImageForm />
			</Modal>
			<Modal
				isOpen={qrModalIsOpen}
				onRequestClose={() => toggleModal('qr')}
				className={styles.modal}
			>
				<QRCodeForm />
			</Modal>
		</>
	)
}

export default SellRoomView
