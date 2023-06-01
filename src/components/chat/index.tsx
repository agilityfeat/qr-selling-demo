import React from 'react'
import styles from './chat.module.scss'

interface Props {
	messages: string[]
}

const Chat = function Chat({ messages }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<input
					id="chatText"
					type="text"
					placeholder="Write a message..."
				/>
				<button type="button" id="chatBtn">
					Send
				</button>
			</div>
			{messages.map((message, key) => (
				// eslint-disable-next-line react/no-array-index-key
				<p key={key}> {message} </p>
			))}
		</div>
	)
}

export default Chat
