import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilos/padrao'

export default props => (
	<Text style={Padrao.ex}>{props.texto}</Text>
)
