import React, { useEffect, useRef, useState } from 'react'
import IVSBroadcastClient, {
	STANDARD_LANDSCAPE,
	LOG_LEVEL,
} from 'amazon-ivs-web-broadcast'
import BuyRoomView from './buy-room.view'

const BuyRoom = function BuyRoom() {
	const client = useRef<any>()
	const canvasRef = useRef<HTMLCanvasElement>()
	const activeVideoDevice = useRef<MediaDeviceInfo>()
	const activeAudioDevice = useRef<MediaDeviceInfo>()
	const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([])
	const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([])

	const getMediaDevices = async () => {
		const devices = await navigator.mediaDevices.enumerateDevices()
		const vDevices = devices.filter((d) => d.kind === 'videoinput')
		const aDevices = devices.filter((d) => d.kind === 'audioinput')
		return [vDevices, aDevices]
	}

	const initLayers = async () => {
		// log errors in the browser console
		client.current.config.logLevel = LOG_LEVEL.ERROR
		// attach the preview canvas to Amazon IVS client
		client.current.attachPreview(canvasRef)

		// list media devices
		try {
			const [vDevices, aDevices] = await getMediaDevices()
			setVideoDevices(vDevices)
			setAudioDevices(aDevices)
		} catch (err) {
			console.error(err)
		}

		try {
			if (!activeVideoDevice.current) {
				;[activeVideoDevice.current] = videoDevices
			}
			// renderActiveVideoDevice()

			if (!activeAudioDevice.current) {
				;[activeAudioDevice.current] = audioDevices
			}
			// renderActiveAudioDevice()
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		const IVSClient = IVSBroadcastClient.create({
			streamConfig: STANDARD_LANDSCAPE,
		})
		client.current = IVSClient
		initLayers()
	}, [])
	return <BuyRoomView />
}

export default BuyRoom
