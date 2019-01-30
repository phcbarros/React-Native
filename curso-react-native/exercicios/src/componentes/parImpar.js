import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilos/padrao'

function verificarParOuImpar(numero) {
  let texto = numero % 2 === 0 ? 'Par' : 'Ímpar'
  return <Text style={Padrao.ex}>{texto}</Text>
}

export default props => (
  <View>
    {
      verificarParOuImpar(props.numero)
    }
  </View>
)