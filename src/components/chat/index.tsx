import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './chat.module.scss'
import { Message } from './useChat'

interface Props {
	messages: Message[]
	sendMessage: (text: string) => void
}

const Chat = function Chat({ messages, sendMessage }: Props) {
	const [text, setText] = useState('')

	const handleSend = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		sendMessage(text)
		setText('')
	}

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<form onSubmit={handleSend}>
					<input
						id="chatText"
						name="chatText"
						type="text"
						placeholder="Write a message..."
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							const { value } = e.target
							setText(value)
						}}
					/>
					<button type="submit" id="chatBtn">
						Send
					</button>
				</form>
			</div>
			{messages.map((message, key) => (
				// eslint-disable-next-line react/no-array-index-key
				<p key={key}> {message.text} </p>
			))}
		</div>
	)
}

export default Chat
