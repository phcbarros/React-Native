/**
 * @format
 */

import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

Icon.loadFont()

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Oxygen-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Oxygen-Bold',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'Oxygen-Light',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'Oxygen-Light',
      fontWeight: '100',
    },
  },
}

console.log('fontConfig', fontConfig)
console.log('fonts', configureFonts(fontConfig))

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
}

console.log('theme', theme)
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)
