import { useState } from 'react'

export interface AudioDevice {
	name: string
	device: MediaDeviceInfo
	enabled: boolean
}

const useMixer = (initialDevices: AudioDevice[]) => {
	const [mixerDevices, setMixerDevices] = useState(initialDevices)

	const removeMixerDevice = async (mixerDevice: AudioDevice, client: any) => {
		if (!mixerDevice) return

		try {
			const { name } = mixerDevice
			if (!name) return
			await client.removeAudioInputDevice(name)

			setMixerDevices((prevState) =>
				prevState.filter((item) => item.name !== name)
			)
		} catch (err) {
			console.error(err)
		}
	}

	const addMixerDevice = async (mixerDevice: AudioDevice, client: any) => {
		try {
			const { device, name, enabled } = mixerDevice

			if (client.getAudioInputDevice(name)) {
				await removeMixerDevice(mixerDevice, client)
			}

			const audioStream = await navigator.mediaDevices.getUserMedia({
				audio: { deviceId: device.deviceId },
				video: false,
			})

			await client.addAudioInputDevice(audioStream, name)

			if (!enabled) {
				const [microphoneTrack] = client
					.getAudioInputDevice(name)
					.getAudioTracks()
				microphoneTrack.enabled = false
			}

			setMixerDevices((prevState) => [...prevState, mixerDevice])
		} catch (err: any) {
			console.error(err)
		}
	}

	const toggleMixerDeviceMute = (mixerDevice: AudioDevice, client: any) => {
		const { name, enabled } = mixerDevice
		const [microphoneTrack] = client
			.getAudioInputDevice(name)
			.getAudioTracks()

		if (enabled) {
			microphoneTrack.enabled = true
		} else {
			microphoneTrack.enabled = false
		}

		return !microphoneTrack.enabled
	}

	return {
		addMixerDevice,
		removeMixerDevice,
		toggleMixerDeviceMute,
	}
}

export default useMixer
