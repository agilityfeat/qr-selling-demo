import React, { useEffect, useRef, useState } from 'react'
import useLayers, { Layer } from '@/components/stream/useLayers'
import useMixer, { AudioDevice } from '@/components/stream/useMixer'
import useStream from '@/components/stream/useStream'
import { ivsConfig } from '@/config/ivs'
import SellRoomView from './sell-room.view'

const CAM_LAYER_NAME = 'camera'
const MIC_LAYER_NAME = 'mic'

const SellRoom = function SellRoom() {
	const client = useRef<any>()
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const activeVideoDevice = useRef<MediaDeviceInfo>()
	const activeAudioDevice = useRef<MediaDeviceInfo>()

	const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([])
	const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([])
	const [camMuted, setCamMuted] = useState(false)
	const [micMuted, setMicMuted] = useState(false)

	const { addLayer, removeLayer } = useLayers([])
	const { addMixerDevice, toggleMixerDeviceMute } = useMixer([])
	const { isLive, toggleStream } = useStream()

	const getMediaDevices = async () => {
		const devices = await navigator.mediaDevices.enumerateDevices()
		const vDevices = devices.filter((d) => d.kind === 'videoinput')
		const aDevices = devices.filter((d) => d.kind === 'audioinput')
		return [vDevices, aDevices]
	}

	const renderActiveVideoDevice = () => {
		const canvas = client.current.getCanvasDimensions()
		const deviceToAdd = activeVideoDevice.current

		const layer: Layer = {
			device: deviceToAdd as MediaDeviceInfo,
			name: CAM_LAYER_NAME,
			index: 4,
			enabled: !camMuted,
			x: 0,
			y: 0,
			width: canvas.width,
			height: canvas.height,
			type: 'VIDEO',
		}

		addLayer(layer, client.current)
	}

	const renderActiveAudioDevice = () => {
		const mixerDevice: AudioDevice = {
			name: MIC_LAYER_NAME,
			device: activeAudioDevice.current as MediaDeviceInfo,
			enabled: micMuted || false,
		}

		addMixerDevice(mixerDevice, client.current)
	}

	const handleMicMute = async () => {
		const mixerDevice: AudioDevice = {
			name: MIC_LAYER_NAME,
			device: activeAudioDevice.current as MediaDeviceInfo,
			enabled: micMuted,
		}

		const enabled = toggleMixerDeviceMute(mixerDevice, client.current)
		setMicMuted(enabled)
	}

	const handleCameraMute = async () => {
		const canvas = client.current.getCanvasDimensions()

		const layer: Layer = {
			device: activeVideoDevice.current as MediaDeviceInfo,
			name: CAM_LAYER_NAME,
			index: 4,
			enabled: camMuted,
			x: 0,
			y: 0,
			width: canvas.width,
			height: canvas.height,
			type: 'VIDEO',
		}

		if (camMuted) {
			await addLayer(layer, client.current)
			setCamMuted(false)
		} else {
			await removeLayer(layer, client.current)
			setCamMuted(true)
		}
	}

	const handleStream = async () => {
		toggleStream(
			ivsConfig.ingestServer,
			ivsConfig.streamKey,
			client.current,
			(err) => console.error(err)
		)
	}

	const initLayers = async () => {
		const IVSBroadcastClient = (await import('amazon-ivs-web-broadcast'))
			.default
		// log errors in the browser console
		client.current.config.logLevel = IVSBroadcastClient.LOG_LEVEL.ERROR
		// attach the preview canvas to Amazon IVS client
		client.current.attachPreview(canvasRef.current)

		// list media devices
		let vDevices: MediaDeviceInfo[] = []
		let aDevices: MediaDeviceInfo[] = []
		try {
			;[vDevices, aDevices] = await getMediaDevices()
			setVideoDevices(vDevices)
			setAudioDevices(aDevices)
		} catch (err) {
			console.error(err)
		}

		try {
			if (!activeVideoDevice.current) {
				;[activeVideoDevice.current] = vDevices
			}
			renderActiveVideoDevice()

			if (!activeAudioDevice.current) {
				;[activeAudioDevice.current] = aDevices
			}
			renderActiveAudioDevice()
		} catch (err) {
			console.error(err)
		}
	}

	const initialize = async () => {
		const IVSBroadcastClient = (await import('amazon-ivs-web-broadcast'))
			.default
		const IVSClient = IVSBroadcastClient.create({
			streamConfig: IVSBroadcastClient.STANDARD_LANDSCAPE,
		})
		client.current = IVSClient
		initLayers()
	}

	useEffect(() => {
		initialize()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<SellRoomView
			canvasRef={canvasRef}
			isLive={isLive}
			micMuted={micMuted}
			camMuted={camMuted}
			handleMicMute={handleMicMute}
			handleCameraMute={handleCameraMute}
			handleStream={handleStream}
			videoDevices={videoDevices}
			audioDevices={audioDevices}
			activeVideoDeviceId={
				activeVideoDevice.current
					? activeVideoDevice.current.deviceId
					: ''
			}
			activeAudioDeviceId={
				activeAudioDevice.current
					? activeAudioDevice.current.deviceId
					: ''
			}
			handleVideoDeviceSelect={(deviceId, clientUpdateRequired) => {
				const device = videoDevices.find((d) => d.deviceId === deviceId)
				activeVideoDevice.current = device
				if (!clientUpdateRequired) renderActiveVideoDevice()
			}}
			handleAudioDeviceSelect={(deviceId, clientUpdateRequired) => {
				const device = audioDevices.find((d) => d.deviceId === deviceId)
				activeAudioDevice.current = device
				if (!clientUpdateRequired) renderActiveAudioDevice()
			}}
		/>
	)
}

export default SellRoom
