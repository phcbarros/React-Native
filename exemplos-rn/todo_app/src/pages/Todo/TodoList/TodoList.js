import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { ListItem, CheckBox } from 'react-native-elements'

export default function TodoList(props) {
  function renderItems({ item }) {
    return (
      <ListItem key={item.id} bottomDivider>
        <CheckBox
          checked={item.done}
          onPress={() => {
            props.onChangeTodo(item)
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={item.done ? styles.todoDoneText : null}>
            {item.description}
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => props.onDeleteTodo(item)}
          iconProps={{
            name: 'trash',
            color: 'red',
            size: 24,
          }}
        />
      </ListItem>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.list}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={renderItems}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'baseline',
  },
  todoDoneText: {
    textDecorationLine: 'line-through',
  },
})
