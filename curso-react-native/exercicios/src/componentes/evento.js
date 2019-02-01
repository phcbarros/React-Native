import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../estilos/padrao'

export default class Evento extends Component {

  state = {
    texto: ''
  }

  alterarTexto = texto => {
    this.setState({ texto })
  }

  render() {
    return (
      <View style={Padrao.container}>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <TextInput style={Padrao.input} 
          value={this.state.texto} 
          onChangeText={this.alterarTexto}/>
      </View>
    )
  }
} 
