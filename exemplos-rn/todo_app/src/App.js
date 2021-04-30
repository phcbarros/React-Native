import React from 'react'
import { SafeAreaView } from 'react-native'
import Todo from './pages/Todo/Todo'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Todo />
    </SafeAreaView>
  )
}
