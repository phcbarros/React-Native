import React from 'react'
import {View, StyleSheet, SafeAreaView} from 'react-native'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default () => {
  return (
    <SafeAreaView style={style.app}>
      <View style={style.container}>
        <TelaA />
        <TelaB />
        <TelaC />
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
