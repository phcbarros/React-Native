import React from 'react'
import {StyleSheet, View} from 'react-native'

import Modal from './pages/Modal'
//import Drag from './pages/Drag'
//import Scroll from './pages/Scroll'
//import Login from './pages/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Modal />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
