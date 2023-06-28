const ivsConfig = {
	ingestServer: process.env.NEXT_PUBLIC_INGEST_SERVER ?? '',
	streamKey: process.env.NEXT_PUBLIC_STREAM_KEY ?? '',
	playbackUrl: process.env.NEXT_PUBLIC_PLAYBACK_URL ?? '',
	chatMessagingEndpoint:
		process.env.NEXT_PUBLIC_CHAT_MESSAGING_ENDPOINT ?? '',
	chatTokenSeller: process.env.NEXT_PUBLIC_CHAT_TOKEN_SELLER ?? '',
	chatTokenBuyer: process.env.NEXT_PUBLIC_CHAT_TOKEN_BUYER ?? '',
}

export { ivsConfig }
