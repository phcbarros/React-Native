/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'

MaterialIcons.loadFont()
FontAwesomeIcons.loadFont()
AppRegistry.registerComponent(appName, () => App)
