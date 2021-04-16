/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Button, StatusBar, View } from 'react-native'
import TextCentral from '../components/TextoCentral'

export default (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Button
          title="Abrir"
          onPress={() => {
            props.navigation.openDrawer()
            setTimeout(() => {
              props.navigation.closeDrawer()
            }, 3000)
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#33fa72" />
        <TextCentral corFundo="#33fa72" corTexto="#000">
          Tela D
        </TextCentral>
      </View>
    </View>
  )
}
