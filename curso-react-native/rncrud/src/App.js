import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navegacao from './navegacao/Stack'

export default () => (
  <SafeAreaProvider>
    <Navegacao />
  </SafeAreaProvider>
)
