import React from 'react'
import {SafeAreaView, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
//import Stack from './Stack'
import Tab from './Tab'

export default props => (
  <SafeAreaView style={style.app}>
    <View style={style.app}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </View>
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
