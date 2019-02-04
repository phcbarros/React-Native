import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Botao from './src/components/botao'
import Display from './src/components/display'

export default class App extends Component {

  state = {
    displayValue: 0
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({displayValue: '0' })
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display displayValue={this.state.displayValue} />
        <View style={styles.buttons}>
          <Botao label='AC' triple onClick={this.clearMemory}/>
          <Botao label='/' operation onClick={this.setOperation} />
          <Botao label='7' onClick={this.addDigit} />
          <Botao label='8' onClick={this.addDigit} />
          <Botao label='9' onClick={this.addDigit} />
          <Botao label='*' operation onClick={this.setOperation} />
          <Botao label='4' onClick={this.addDigit} />
          <Botao label='5' onClick={this.addDigit} />
          <Botao label='6' onClick={this.addDigit} />
          <Botao label='-' operation onClick={this.setOperation} />
          <Botao label='1' onClick={this.addDigit} />
          <Botao label='2' onClick={this.addDigit} />
          <Botao label='3' onClick={this.addDigit} />
          <Botao label='+' operation onClick={this.setOperation} />
          <Botao label='0' double onClick={this.addDigit} />
          <Botao label='.' onClick={this.addDigit} />
          <Botao label='=' operation onClick={this.setOperation} />
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
