import React from 'react'
import {StatusBar} from 'react-native'
import TextCentral from '../components/TextoCentral'

export default () => {
  return (
    <>
      <StatusBar backgroundColor="#3b82c4" />
      <TextCentral corFundo="#3b82c4">Tela B</TextCentral>
    </>
  )
}
