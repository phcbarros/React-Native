import React from 'react'
import {StatusBar} from 'react-native'
import TextCentral from '../components/TextoCentral'

export default props => {
  const r = props.route
  const numero = r && r.param && r.params.numero ? r.params.numero : 0
  return (
    <>
      <StatusBar backgroundColor="#9932cd" />
      <TextCentral corFundo="#9932cd">Tela C - {numero}</TextCentral>
    </>
  )
}
