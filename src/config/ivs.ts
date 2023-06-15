const ivsConfig = {
	ingestServer: process.env.NEXT_PUBLIC_INGEST_SERVER ?? '',
	streamKey: process.env.NEXT_PUBLIC_STREAM_KEY ?? '',
}

export { ivsConfig }
