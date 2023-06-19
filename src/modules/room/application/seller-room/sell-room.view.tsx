/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react'
import Modal from 'react-modal'
import {
	FaImage,
	FaQrcode,
	FaBroom,
	FaMicrophone,
	FaMicrophoneSlash,
	FaVideo,
	FaVideoSlash,
	FaEllipsisH,
} from 'react-icons/fa'
import Header from '@/components/header'
import Main from '@/components/main'
import Videos from '@/components/videos'
import Chat from '@/components/chat'
import ImageForm from '@/components/forms/image'
import IconButton from '@/components/buttons/iconButton/iconButton'
import QRCodeForm from '@/components/forms/qr'
import PrimaryButton from '@/components/buttons/primary'
import ControlButton from '@/components/buttons/controlButton/controlButton'
import Settings from '@/components/forms/settings'
import styles from './sell-room.module.scss'

interface Props {
	canvasRef: React.RefObject<HTMLCanvasElement>
	isLive: boolean
	micMuted: boolean
	camMuted: boolean
	handleMicMute: () => void
	handleCameraMute: () => void
	handleStream: () => void
	videoDevices: MediaDeviceInfo[]
	audioDevices: MediaDeviceInfo[]
	activeVideoDeviceId: string
	activeAudioDeviceId: string
	handleVideoDeviceSelect: (deviceId: string) => void
	handleAudioDeviceSelect: (deviceId: string) => void
}

const SellRoomView = function SellRoomView({
	canvasRef,
	isLive,
	micMuted,
	camMuted,
	handleMicMute,
	handleCameraMute,
	handleStream,
	videoDevices,
	audioDevices,
	activeVideoDeviceId,
	activeAudioDeviceId,
	handleVideoDeviceSelect,
	handleAudioDeviceSelect,
}: Props) {
	const [imgModalIsOpen, setImgModalIsOpen] = useState(false)
	const [qrModalIsOpen, setQrModalIsOpen] = useState(false)
	const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false)

	const toggleModal = function toggleModal(m: string) {
		switch (m) {
			case 'image':
				setImgModalIsOpen((previousState) => !previousState)
				break
			case 'qr':
				setQrModalIsOpen((previousState) => !previousState)
				break
			case 'settings':
				setSettingsModalIsOpen((previousState) => !previousState)
				break
			default:
				break
		}
	}

	Modal.setAppElement('#modals')

	return (
		<>
			<Header />
			<Main>
				<div className={styles.videos}>
					<Videos>
						<canvas
							key="STREAM_PREVIEW_VIDEO"
							id="cam-video-preview"
							ref={canvasRef}
						/>
					</Videos>
					<div className={styles.controlBar}>
						<div className={styles.controlBarLeft} />
						<div className={styles.controlBarCenter}>
							<ControlButton
								onClick={handleMicMute}
								icon={
									micMuted ? (
										<FaMicrophoneSlash />
									) : (
										<FaMicrophone />
									)
								}
							/>
							<ControlButton
								onClick={handleCameraMute}
								icon={camMuted ? <FaVideoSlash /> : <FaVideo />}
							/>
							<ControlButton
								onClick={() => toggleModal('settings')}
								icon={<FaEllipsisH />}
							/>
							<PrimaryButton onClick={handleStream}>
								{isLive ? 'Stop Selling' : 'Start Selling'}
							</PrimaryButton>
						</div>
						<div className={styles.controlBarRight} />
					</div>
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
			<div id="modals">
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
				<Modal
					isOpen={settingsModalIsOpen}
					onRequestClose={() => toggleModal('settings')}
					className={styles.modal}
				>
					<Settings
						videoDevices={videoDevices}
						audioDevices={audioDevices}
						activeVideoDeviceId={activeVideoDeviceId}
						activeAudioDeviceId={activeAudioDeviceId}
						handleVideoDeviceSelect={handleVideoDeviceSelect}
						handleAudioDeviceSelect={handleAudioDeviceSelect}
						handleCloseModal={() => toggleModal('settings')}
					/>
				</Modal>
			</div>
		</>
	)
}

export default SellRoomView
