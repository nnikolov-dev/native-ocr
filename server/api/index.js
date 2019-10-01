const express = require('express')
const path = require('path')
const {TesseractWorker} = require('tesseract.js')

const api = express.Router()

api.get('/ocr', async (req, res) => {
	const worker = new TesseractWorker()
	const image = path.resolve(__dirname, ('../images/test.png'))
	console.log(`Detecting ${image}`)
	worker.detect(image)
		.progress((info) => {
			console.log(info)
		})
		.then((data) => {
			console.log('done', data)
		})
	res.json({success: 'true'})
})

module.exports = api
