import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Stack from './Stack'
export default props => (
  <SafeAreaView style={style.app}>
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
)

const style = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
