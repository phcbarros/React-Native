import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import TextCentral from './components/TextoCentral'

export default () => {
  return (
    <SafeAreaView style={style.app}>
      <View style={style.container}>
        <TextCentral>App</TextCentral>
      </View>
    </SafeAreaView>
  )
}

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
