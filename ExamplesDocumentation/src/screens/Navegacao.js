import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { ListViewScreen } from './list-views'
import { ClipboardScreen } from './clipboard'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
export function Navegacao() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Clipboard" component={ClipboardScreen} />
        <Drawer.Screen name="ListView" component={ListViewScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
