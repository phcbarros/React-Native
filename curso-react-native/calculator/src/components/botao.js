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
  },
  buttonDouble: {
    width: dimensao * 2
  },
  buttonTriple: {
    width: dimensao * 3
  },
  buttonOperation: {
    backgroundColor: '#fa8231',
    color: '#fff'
  }
})

export default props => {
  const stylesButton = [styles.button]

  if(props.double) stylesButton.push(styles.buttonDouble)
  if(props.triple) stylesButton.push(styles.buttonTriple)
  if(props.operation) stylesButton.push(styles.buttonOperation)

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}
