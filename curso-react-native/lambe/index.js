import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src/navigator/Navigator'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import storeConfig from './src/store/store-config'
import axios from 'axios'

axios.defaults.baseURL = 'https://lambe-99df9.firebaseio.com/'

const store = storeConfig()
const Redux = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Redux)
