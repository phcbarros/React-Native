import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {styles} from './styles'

type Props = {
  title: string
  message: string
  onPress: () => void
}

export function ModalMessage({title, message, onPress}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.button}>
          <Text>ok, entendido</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
