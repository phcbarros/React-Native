import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Botao from './src/components/botao'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Botao label='AC' />
          <Botao label='/' />
          <Botao label='7' />
          <Botao label='8' />
          <Botao label='9' />
          <Botao label='*' />
          <Botao label='4' />
          <Botao label='5' />
          <Botao label='6' />
          <Botao label='-' />
          <Botao label='1' />
          <Botao label='2' />
          <Botao label='3' />
          <Botao label='+' />
          <Botao label='0' />
          <Botao label='.' />
          <Botao label='=' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
