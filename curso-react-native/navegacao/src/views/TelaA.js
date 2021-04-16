import React from 'react'
import {StatusBar} from 'react-native'
import TextCentral from '../components/TextoCentral'

export default props => {
  return (
    <>
      <StatusBar backgroundColor="#e53935" />
      <TextCentral corFundo="#e53935">Tela A</TextCentral>
    </>
  )
}
