/**
 * @format
 */

import { AppRegistry } from 'react-native'
import Navegacao from './src/navegacao/'
import { name as appName } from './app.json'
import Icon from 'react-native-vector-icons/Ionicons'

Icon.loadFont()

AppRegistry.registerComponent(appName, () => Navegacao)
