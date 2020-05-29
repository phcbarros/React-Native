import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ListViewScreen } from './list-views'

const Stack = createStackNavigator()
export function Navegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListView" component={ListViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
