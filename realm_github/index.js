/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

MaterialIcons.loadFont()

AppRegistry.registerComponent(appName, () => App)
