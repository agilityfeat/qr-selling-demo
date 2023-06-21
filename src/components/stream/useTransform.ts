import QRCode from 'qrcode'

interface ProcessedTrackParams {
	track: MediaStreamTrack
	transform: (frame: VideoFrame, controller: any) => void
}

export interface ShowImageParams {
	image: File
	imgPositionX: number
	imgPositionY: number
	imgWidth: number
	imgHeight: number
}

export interface ShowQrImageParams {
	text: string
	qrWidth: number
	qrHeight: number
	colorDark: string
	colorLight: string
	positionX: number
	positionY: number
}

const useTransform = () => {
	const createProcessedTrack = function createProcessedTrack({
		track,
		transform,
	}: ProcessedTrackParams) {
		const trackProcessor = new MediaStreamTrackProcessor({ track })
		const trackGenerator = new MediaStreamTrackGenerator({
			kind: track.kind,
		})

		const transformer = new TransformStream({ transform })

		trackProcessor.readable
			.pipeThrough(transformer)
			.pipeTo(trackGenerator.writable)

		return trackGenerator
	}

	const cleanStream = function cleanStream(): (
		frame: VideoFrame,
		controller: any
	) => void {
		return function transform(frame, controller) {
			controller.enqueue(frame)
		}
	}

	const showImage = function showImage({
		image,
		imgPositionX = 10,
		imgPositionY = 10,
		imgWidth = 450,
		imgHeight = 320,
	}: ShowImageParams): (frame: VideoFrame, controller: any) => void {
		const canvas = new OffscreenCanvas(1, 1)
		const ctx = canvas.getContext('2d')
		const img = new Image()
		img.src = URL.createObjectURL(image)

		return function transform(frame, controller) {
			const width = frame.displayWidth
			const height = frame.displayHeight
			canvas.width = width
			canvas.height = height

			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.drawImage(frame, 0, 0, width, height)
				ctx.drawImage(
					img,
					imgPositionX,
					imgPositionY,
					imgWidth,
					imgHeight
				)
			}

			const { timestamp } = frame
			frame.close()

			const newFrame = new VideoFrame(canvas, { timestamp })
			controller.enqueue(newFrame)
		}
	}

	const showQr = function showQr({
		text,
		qrWidth = 256,
		qrHeight = 256,
		colorDark = '#000000',
		colorLight = '#FFFFFF',
		positionX = 10,
		positionY = 10,
	}: ShowQrImageParams): (frame: VideoFrame, controller: any) => void {
		const canvas = new OffscreenCanvas(1, 2)
		const ctx = canvas.getContext('2d')
		const qrCanvas = document.createElement('canvas')

		QRCode.toCanvas(qrCanvas, text, {
			width: qrWidth,
			color: {
				dark: colorDark,
				light: colorLight,
			},
		})

		return function transform(frame, controller) {
			const width = frame.displayWidth
			const height = frame.displayHeight
			canvas.width = width
			canvas.height = height

			if (ctx) {
				ctx.clearRect(0, 0, width, height)
				ctx.drawImage(frame, 0, 0, width, height)
				ctx.drawImage(qrCanvas, positionX, positionY, qrWidth, qrHeight)
			}

			const { timestamp } = frame
			frame.close()

			const newFrame = new VideoFrame(canvas, { timestamp })
			controller.enqueue(newFrame)
		}
	}

	return {
		createProcessedTrack,
		cleanStream,
		showImage,
		showQr,
	}
}

export default useTransform