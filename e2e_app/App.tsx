import React from 'react'
import {StatusBar} from 'react-native'
import 'react-native-gesture-handler'

import {Plan} from './src/screens/Plan'

export default function App() {
  return (
    <>
      <StatusBar translucent style="dark" />
      <Plan />
    </>
  )
}
