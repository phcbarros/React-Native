import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Padrao from '../estilos/padrao'

export default class Contador extends Component {

  state = {
    numero: 0
  }

  adicionar = () => {
    this.setState({ numero: this.state.numero + 1 })
  }

  limpar = () => {
    this.setState({ numero: 0 })
  }

  render () {
    return (
      <View style={Padrao.container}>
        <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={this.adicionar}
          onLongPress={this.limpar} >
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}