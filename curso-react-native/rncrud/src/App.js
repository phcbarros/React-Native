import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { UsersProvider } from './context/UsersContext'
import Navegacao from './navegacao/Stack'

export default () => (
  <SafeAreaProvider>
    <UsersProvider>
      <Navegacao />
    </UsersProvider>
  </SafeAreaProvider>
)
