import React, { ChangeEvent, FormEvent, useState } from 'react'
import useChat from './useChat'
import styles from './chat.module.scss'

interface Props {
	chatToken: string
}

const Chat = function Chat({ chatToken }: Props) {
	const [text, setText] = useState('')
	const { messages, sendMessage } = useChat(chatToken)

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
