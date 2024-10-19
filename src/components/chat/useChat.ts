import { useEffect, useState, useRef } from 'react'

export interface Message {
	text: string
}

const SEND_MESSAGE = 'SEND_MESSAGE'

const useChat = (chatMessagingEndpoint = 'http://localhost:8080') => {
	const [messages, setMessages] = useState<Message[]>([])
	const connection = useRef<WebSocket>()

	useEffect(() => {
		connection.current = new WebSocket(chatMessagingEndpoint)

		connection.current.onmessage = (e) => {
			console.log('received message', e)
			const { data } = e
			setMessages((prevState) => [...prevState, { text: data }])
		}
	}, [])

	const sendMessage = function send(text: string) {
		const con = connection.current as WebSocket
		con.send(text)
	}

	return {
		messages,
		sendMessage,
	}
}

export default useChat
