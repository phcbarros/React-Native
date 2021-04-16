import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import users from '../data/users'

export default (props) => {
  const renderItems = ({ item: user }) => {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar source={{ uri: user.avatarUrl }} avatarStyle={style.avatar} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => `${user.id}`}
        renderItem={renderItems}
      />
    </View>
  )
}

const style = StyleSheet.create({
  avatar: {
    borderRadius: 25,
  },
})
