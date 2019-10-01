import React, {useState, useEffect} from 'react'
import {AppLoading} from 'expo'
import {View, StatusBar, Container, Header, Body, Title, Content, Button, Text} from 'native-base'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import socketIOClient from 'socket.io-client'


export default function App() {
	const [isReady, setIsReady] = useState(false)
	const [socket, setSocket] = useState(null)
	// const [responseCount, setReponseCount] = useState(0)

	useEffect(() => {
		async function loadAssets() {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font,
			})
			setIsReady(true)
		}
		loadAssets()
		setSocket(socketIOClient('http://10.0.2.2:80'))
	}, [])

	// useEffect(() => {
	// 	socket.on('status', (data) => {
	// 		console.log(data)
	// 	})
	// 	socket.on('progress', (data) => {
	// 		console.log(data)
	// 	})
	// 	socket.on('result', (data) => {
	// 		console.log(data)
	// 	})
	// 	socket.on('terminate', () => {
	// 		socket.close()
	// 	})
	// 	setReponseCount(responseCount + 1)
	// }, [responseCount])

	const doOCR = () => {
		// socket.emit('image', 1000)
	}

	if (!isReady) {
		return <AppLoading />
	}
	return (
		<Container>
			<Header>
				<Body>
					<Title>React Native OCR</Title>
				</Body>
			</Header>
			<Content padder>
				<Button onPress={(e) => doOCR()}>
					<Text>Click Me</Text>
				</Button>
			</Content>
		</Container>
	)
}
