import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Following } from './pages/Following'
import { CommingSoon } from './pages/CommingSoon'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import colors from './styles/colors'

const { Navigator, Screen } = createBottomTabNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabBarIconStyle: {
            flex: 0,
            width: 24,
            height: 24,
          },
          tabBarLabelStyle: {
            fontFamily: 'roboto_400',
            fontSize: 11,
            marginTop: 5,
          },
          tabBarInactiveTintColor: colors.black,
          tabBarActiveTintColor: colors.purple,
        }}>
        <Screen
          name="Following"
          component={Following}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-heart"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              )
            },
          }}
        />
        <Screen
          name="Discover"
          component={CommingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="compass-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              )
            },
          }}
        />
        <Screen
          name="Browse"
          component={CommingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Ionicons
                  name="md-browsers-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              )
            },
          }}
        />
        <Screen
          name="ESports"
          component={CommingSoon}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <MaterialCommunityIcons
                  name="trophy-outline"
                  size={size}
                  color={focused ? colors.purple : colors.black}
                />
              )
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
