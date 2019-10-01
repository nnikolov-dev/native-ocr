import React from 'react'
import {AppLoading} from 'expo'
import {Container, Header, Body, Title, Content, Button, Text} from 'native-base'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isReady: false,
		}
	}

	async componentDidMount() {
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		})
		this.setState({isReady: true})

		console.log('mounted')

		const google = await fetch('http://localhost:8080/api/ocr')
		const data = await google.json()
		console.log(data)
	}

	render() {
		const {isReady} = this.state
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
					<Button>
						<Text>Click Me</Text>
					</Button>
				</Content>
			</Container>
		)
	}
}
