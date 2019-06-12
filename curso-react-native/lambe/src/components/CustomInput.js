import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default (props) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    paddingLeft: 15,
  },
})
