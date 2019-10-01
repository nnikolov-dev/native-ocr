const path = require('path')
const {TesseractWorker} = require('tesseract.js')
const io = require('socket.io').listen(80)

io.sockets.on('connection', (socket) => {
	const worker = new TesseractWorker()
	const image = path.resolve(__dirname, ('./images/test.png'))
	socket.on('image', () => {
		console.log(1)
		worker.recognize(image)
			.progress((info) => {
				socket.emit('progress', info.progress)
			})
			.then((result) => {
				socket.emit('result', result.text)
			}).finally(() => {
				socket.emit('terminate', true)
				worker.terminate()
			})
	})

	socket.on('disconnect', (reason) => {
		console.log(`disconnected ${reason}`)
	})
})
