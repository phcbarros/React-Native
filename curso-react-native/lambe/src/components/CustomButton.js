import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        props.style,
        props.disabled ? styles.buttonDisabled : null,
      ]}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
  buttonDisabled: {
    backgroundColor: '#AAA',
  },
})
