import React from 'react'
import {SafeAreaView, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
//import Stack from './Stack'
//import Tab from './Tab'
import Drawer from './Drawer'

export default props => (
  <SafeAreaView style={style.app}>
    <View style={style.app}>
      <NavigationContainer>
        <Drawer />
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
