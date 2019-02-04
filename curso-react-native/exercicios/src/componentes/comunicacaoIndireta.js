import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilos/padrao'

export const Entrada = props =>
  <View>
    <TextInput style={Padrao.input} value={props.texto}
      onChangeText={props.chamarQuandoMudar} />
  </View>

export default class TextoSincronizado extends Component {
  
  state = {
    texto: ''
  }

  alterarTexto = texto => {
    this.setState({ texto })
  }

  render () {
    return (
      <View>
        <Entrada texto={this.state.texto} chamarQuandoMudar={this.alterarTexto} />
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
      </View>
    )
  }
}
