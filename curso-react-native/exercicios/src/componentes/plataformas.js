import React from 'react'
import { View, Button, Platform, Alert, ToastAndroid } from 'react-native'
import Padrao from '../estilos/padrao'

export default props => {
  const notificar = (msg) => {
    if (Platform.OS === 'android')
      return ToastAndroid.show(msg, ToastAndroid.LONG)
    else
      return Alert.alert('Informação', msg)
  }

  return  (
    <View style={Padrao.container}>
      <Button onPress={() => notificar('Parabéns')} title='Clique aqui'/>
    </View>
  )
}
