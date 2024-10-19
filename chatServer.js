// server.js

const express = require('express')
const http = require('http')
const cors = require('cors')
const WebSocket = require('ws')

const app = express()
app.use(cors())

const server = http.createServer(app)
const wss = new WebSocket.Server({ server })

wss.on('connection', (ws) => {
	console.log('Client connected')

	ws.isAlive = true

	ws.on('pong', () => {
		ws.isAlive = true
	})

	ws.on('message', (message, isBinary) => {
		console.log(`Received: ${message}`)
		wss.clients.forEach(function each(client) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(message, { binary: isBinary })
			}
		})
	})
})

const interval = setInterval(() => {
	wss.clients.forEach((ws) => {
		if (!ws.isAlive) return ws.terminate()

		ws.isAlive = false
		ws.ping(() => {})
	})
}, 30000)

server.listen(8080, () => {
	console.log('Server started on port 8080')
})
