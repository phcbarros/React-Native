import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

export default function TodoDisplay({ onAddTodo }) {
  const [description, setDescription] = useState('')
  function handleOnChangeText(value) {
    setDescription(value)
  }

  function handleAddTodo() {
    if (!description) {
      return
    }
    onAddTodo(description)
    setDescription('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          value={description}
          onChangeText={handleOnChangeText}
          placeholder="Digite uma tarefa..."
        />
      </View>
      <Button
        title="Adicionar"
        disabled={!description}
        onPress={handleAddTodo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
})
