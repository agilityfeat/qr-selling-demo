const agoraConfig = {
	agoraAppId: process.env.NEXT_PUBLIC_AGORA_APPID  ?? '',
	agoraChannel: process.env.NEXT_PUBLIC_AGORA_CHANNEL ?? '',
	agoraToken: process.env.NEXT_PUBLIC_AGORA_TOKEN ?? '',
}

export { agoraConfig }