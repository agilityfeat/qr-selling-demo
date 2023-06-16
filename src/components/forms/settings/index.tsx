/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useEffect } from 'react'
import styles from '../forms.module.scss'

interface Props {
	videoDevices: MediaDeviceInfo[]
	audioDevices: MediaDeviceInfo[]
	activeVideoDeviceId: string
	activeAudioDeviceId: string
	handleVideoDeviceSelect: (
		deviceId: string,
		clientUpdateRequired: boolean
	) => void
	handleAudioDeviceSelect: (
		deviceId: string,
		clientUpdateRequired: boolean
	) => void
	handleCloseModal: (modal: string) => void
}

interface DeviceSelectProps {
	activeDeviceId: string
	items: { deviceId: string; label: string }[]
	name: string
	id: string
	onChange: (e: any) => void
}

const DeviceSelect = function DeviceSelect({
	activeDeviceId,
	items,
	name,
	id,
	onChange,
}: DeviceSelectProps) {
	return (
		<fieldset className={styles.deviceSelectField}>
			<label
				className={styles.deviceSelectLabel}
				htmlFor={`${id}`}
			>{`${name}`}</label>
			<select
				onChange={onChange}
				defaultValue={activeDeviceId}
				id={`${id}`}
			>
				{items.map((item, i) => ({
					value: item.deviceId,
					label: item.label,
				}))}
			</select>
		</fieldset>
	)
}

const Settings = function Settings({
	videoDevices,
	audioDevices,
	activeVideoDeviceId,
	activeAudioDeviceId,
	handleVideoDeviceSelect,
	handleAudioDeviceSelect,
	handleCloseModal,
}: Props) {
	const previewRef = useRef<HTMLVideoElement>(null)
	const [previewVideoStream, setPreviewStream] = useState<MediaStream>()

	const [selectedVideoDeviceId, setSelectedVideoDeviceId] =
		useState(activeVideoDeviceId)
	const [selectedAudioDeviceId, setSelectedAudioDeviceId] =
		useState(activeAudioDeviceId)

	useEffect(() => {
		if (previewRef && previewRef.current && selectedVideoDeviceId) {
			// If there's an existing video preview, stop it before proceeding.
			if (previewVideoStream) {
				previewVideoStream.getTracks().map((track) => track.stop())
				if (previewRef.current) previewRef.current.srcObject = null
			}

			navigator.mediaDevices
				.getUserMedia({
					video: {
						deviceId: { exact: selectedVideoDeviceId },
					},
				})
				.then((stream) => {
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					const video = previewRef.current!
					video.srcObject = stream
					video.onloadeddata = () => {
						video.play()
					}

					setPreviewStream(stream)
				})
				.catch((err) => {
					console.error(err)
				})
		}

		return () => {
			if (previewVideoStream) {
				previewVideoStream.getTracks().map((track) => track.stop())
			}
		}
	}, [selectedVideoDeviceId])

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h2>Settings</h2>
				</div>
				<div className={styles.contentBody}>
					<div className={styles.previewWrapper}>
						<div className={styles.previewInner}>
							<video
								className={styles.previewVideo}
								ref={previewRef}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
