import { useEffect, useState, useRef } from 'react'

export interface Message {
	text: string
}

const SEND_MESSAGE = 'SEND_MESSAGE'

const useChat = (chatToken: string, chatMessagingEndpoint: string) => {
	const [messages, setMessages] = useState<Message[]>([])
	const connection = useRef<WebSocket>()

	useEffect(() => {
		connection.current = new WebSocket(chatMessagingEndpoint, chatToken)

		connection.current.onmessage = (e) => {
			const data = JSON.parse(e.data)
			setMessages((prevState) => [...prevState, { text: data.Content }])
		}
	}, [])

	const sendMessage = function send(text: string) {
		const payload = {
			Action: SEND_MESSAGE,
			Content: text,
		}

		const con = connection.current as WebSocket
		con.send(JSON.stringify(payload))
	}

	return {
		messages,
		sendMessage,
	}
}

export default useChat
