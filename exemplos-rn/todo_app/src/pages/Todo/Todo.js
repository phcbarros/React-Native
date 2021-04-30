import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import TodoDisplay from './TodoDisplay/TodoDisplay'
import TodoList from './TodoList/TodoList'

export default function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      description: 'Ir pra escola',
      done: true,
    },
    {
      id: 2,
      description: 'Fazer compras',
      done: false,
    },
    {
      id: 3,
      description: 'Assistir TV',
      done: false,
    },
  ])

  function addTodo(description) {
    const newTodo = {
      id: Math.random(),
      description,
      done: false,
    }
    setList([...list, newTodo])
  }

  function toggleTodo(todo) {
    const updatedList = list.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, done: !todo.done }
      }
      return item
    })
    setList(updatedList)
  }

  function deleteTodo(todo) {
    setList([...list.filter((item) => item.id !== todo.id)])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h1>Minhas Tarefas</Text>
      </View>
      <TodoDisplay onAddTodo={addTodo} />
      <TodoList
        list={list}
        onChangeTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
})
