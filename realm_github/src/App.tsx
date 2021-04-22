import React from 'react'
import { StatusBar } from 'react-native'
import Main from './pages/Main'

export default () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Main />
    </>
  )
}
