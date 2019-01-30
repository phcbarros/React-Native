import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilos/padrao'

export default props => (
	<View style={Padrao.container}>
		<Text style={Padrao.ex}>{props.texto}</Text>
	</View>
)
