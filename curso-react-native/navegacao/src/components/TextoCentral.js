import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

export default props => {
  return (
    <View
      style={[style.container, {backgroundColor: props.corFundo || '#000'}]}>
      <Text style={[style.txt, {color: props.corTexto || '#fff'}]}>
        {props.children}
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 50,
  },
})
