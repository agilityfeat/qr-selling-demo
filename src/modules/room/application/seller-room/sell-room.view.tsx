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
import useTransform, {
	ShowImageParams,
	ShowQrImageParams,
} from '@/components/stream/useTransform'
import { Message } from '@/components/chat/useChat'
import styles from './sell-room.module.scss'
import { ICameraVideoTrack, IMicrophoneAudioTrack, LocalUser } from 'agora-rtc-react'

interface Props {
	canvasRef: React.RefObject<HTMLCanvasElement>
	isLive: boolean
	micMuted: boolean
	camMuted: boolean
	handleMicMute: () => void
	handleCameraMute: () => void
	handleStream: () => void
	localMicrophoneTrack: IMicrophoneAudioTrack | null
	localCameraTrack: ICameraVideoTrack | null
	videoDevices: MediaDeviceInfo[]
	audioDevices: MediaDeviceInfo[]
	activeVideoDeviceId: string
	activeAudioDeviceId: string
	handleVideoDeviceSelect: (deviceId: string) => void
	handleAudioDeviceSelect: (deviceId: string) => void
	handleTransformSelect: (
		transform: (
			frame: VideoFrame,
			controller: TransformStreamDefaultController
		) => void
	) => void
	chatMessages: Message[]
	sendChatMessage: (text: string) => void
}

const SellRoomView = function SellRoomView({
	canvasRef,
	isLive,
	micMuted,
	camMuted,
	handleMicMute,
	handleCameraMute,
	handleStream,
	localMicrophoneTrack,
	localCameraTrack,
	videoDevices,
	audioDevices,
	activeVideoDeviceId,
	activeAudioDeviceId,
	handleVideoDeviceSelect,
	handleAudioDeviceSelect,
	handleTransformSelect,
	chatMessages,
	sendChatMessage,
}: Props) {
	const [imgModalIsOpen, setImgModalIsOpen] = useState(false)
	const [qrModalIsOpen, setQrModalIsOpen] = useState(false)
	const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false)
	const { showImage, showQr, cleanStream } = useTransform()

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
						<LocalUser
							audioTrack={localMicrophoneTrack}
							cameraOn={!camMuted}
							micOn={!micMuted}
							videoTrack={localCameraTrack}
						>
							You
						</LocalUser>
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
							{isLive ? (
								<PrimaryButton
									onClick={handleStream}
									style={{ background: 'red' }}
								>
									Stop Selling
								</PrimaryButton>
							) : (
								<PrimaryButton onClick={handleStream}>
									Start Selling
								</PrimaryButton>
							)}
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
						<IconButton
							onClick={() => handleTransformSelect(cleanStream())}
							icon={<FaBroom />}
						/>
					</div>
					<Chat
						messages={chatMessages}
						sendMessage={sendChatMessage}
					/>
				</div>
			</Main>
			<Modal
				isOpen={imgModalIsOpen}
				onRequestClose={() => toggleModal('image')}
				className={styles.modal}
			>
				<ImageForm
					handleOnSave={(options: ShowImageParams) =>
						handleTransformSelect(showImage(options))
					}
					handleOnClose={() => toggleModal('image')}
				/>
			</Modal>
			<Modal
				isOpen={qrModalIsOpen}
				onRequestClose={() => toggleModal('qr')}
				className={styles.modal}
			>
				<QRCodeForm
					handleOnSave={(options: ShowQrImageParams) =>
						handleTransformSelect(showQr(options))
					}
					handleOnClose={() => toggleModal('qr')}
				/>
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
		</>
	)
}

export default SellRoomView
