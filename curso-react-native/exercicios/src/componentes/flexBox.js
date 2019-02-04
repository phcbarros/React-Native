import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'flex-end', //main-axis coluna
    justifyContent: 'center', //cross-axis linha
  },
  centro: {
    flex: 2,
    flexDirection: 'row', //main-axis linha
    backgroundColor: '#ccc',
    alignItems: 'center', //main-axis linha
    justifyContent: 'space-around' //cross-axis coluna
  },
  sul: {
    flex: 1,
    backgroundColor: '#f0a',
    alignItems: 'center', //main-axis coluna
    justifyContent: 'flex-end' //cross-axis linha
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50
  }
})

const Circulo = () => <View style={styles.circulo}></View>

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.norte}>
        <Circulo />
      </View>
      <View style={styles.centro}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.sul}>
        <Circulo />
      </View>
    </View>
  )
}
