import { useState } from 'react'

const useStream = () => {
	const [isLive, setIsLive] = useState(false)

	const startStream = async (
		ingestServer: string,
		streamKey: string,
		client: any,
		handleError: (err: any) => void
	) => {
		try {
			// eslint-disable-next-line no-param-reassign
			client.config.ingestEndpoint = ingestServer

			await client.getAudioContext().resume()
			await client.startBroadcast(streamKey)

			setIsLive(true)
		} catch (err) {
			handleError(`Error handling stream: ${err}`)
			setIsLive(false)
		}
	}

	const stopStream = async (client: any, handleError: (err: any) => void) => {
		try {
			await client.stopBroadcast()
			setIsLive(false)
		} catch (err) {
			handleError(err)
		}
	}

	const toggleStream = async (
		ingestServer: string,
		streamKey: string,
		client: any,
		handleError: (err: any) => void
	) => {
		if (isLive) {
			stopStream(client, handleError)
		} else {
			startStream(ingestServer, streamKey, client, handleError)
		}
	}

	return {
		isLive,
		toggleStream,
	}
}

export default useStream
