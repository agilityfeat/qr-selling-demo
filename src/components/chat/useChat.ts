import { useState } from 'react'
import { ivsConfig } from '@/config/ivs'

export interface Message {
	text: string
}

const SEND_MESSAGE = 'SEND_MESSAGE'

const useChat = () => {
	const [messages, setMessages] = useState<Message[]>([])

	const { chatMessagingEndpoint, chatToken } = ivsConfig
	const connection = new WebSocket(chatMessagingEndpoint, chatToken)

	connection.onmessage = (e) => {
		const data = JSON.parse(e.data)
		setMessages((prevState) => [...prevState, { text: data.Content }])
	}

	const sendMessage = function send(text: string) {
		const payload = {
			Action: SEND_MESSAGE,
			Content: text,
		}

		connection.send(JSON.stringify(payload))
	}

	return {
		messages,
		sendMessage,
	}
}

export default useChat
