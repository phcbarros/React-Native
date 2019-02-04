import React from 'react'
import { TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native'

const dimensao = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: dimensao,
    width: dimensao,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  }
})

export default props => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  )
}
