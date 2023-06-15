import { useState } from 'react'

export interface Layer {
	name: string
	index: number
	x: number
	y: number
	width: number
	height: number
	device: MediaDeviceInfo
	type: string
	enabled: boolean
}

const useLayers = (initialLayers: Layer[]) => {
	const [layers, setLayers] = useState(initialLayers)

	const removeLayer = async (layer: Layer, client: any) => {
		if (!layer) return
		try {
			const { name } = layer
			if (!name) return

			let stream
			switch (layer.type) {
				case 'VIDEO':
					stream = client.getVideoInputDevice(name)
					if (stream) {
						stream.source
							.getVideoTracks()
							.map((track: MediaStreamTrack) => track.stop)
					}
					await client.removeVideoInputDevice(name)
					break
				default:
					break
			}

			setLayers((prevState) =>
				prevState.filter((item) => item.name !== name)
			)
		} catch (err) {
			console.error(err)
		}
	}

	const addVideoLayer = async (layer: Layer, client: any) => {
		try {
			if (layer.enabled) {
				const { name, device, ...layerProps } = layer

				if (client.getVideoInputDevice(layer.name)) {
					await removeLayer(layer, client)
				}

				const cameraStream = await navigator.mediaDevices.getUserMedia({
					video: {
						deviceId: { exact: device.deviceId },
					},
					audio: false,
				})

				await client.addVideoInputDevice(cameraStream, name, layerProps)
			}
			setLayers((prevState) => [...prevState, layer])
		} catch (err: any) {
			throw Error(err)
		}
	}

	const addLayer = async (layer: Layer, client: any) => {
		try {
			switch (layer.type) {
				case 'VIDEO':
					await addVideoLayer(layer, client)
					break
				default:
					break
			}
		} catch (err) {
			console.error(err)
		}
	}

	return {
		addLayer,
		removeLayer,
	}
}
export default useLayers
