import React, { useContext } from 'react'
import { View, FlatList, StyleSheet, Alert } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default (props) => {
  const { state, dispatch } = useContext(UsersContext)
  function confirmUserDeletation(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress: () =>
          dispatch({
            type: 'deleteUser',
            payload: user,
          }),
      },
      {
        text: 'Não',
      },
    ])
  }

  function naviigateToUserForm(user) {
    props.navigation.navigate('UserForm', user)
  }

  const renderItems = ({ item: user }) => {
    return (
      <ListItem
        key={user.id}
        bottomDivider
        onPress={() => naviigateToUserForm(user)}>
        <Avatar source={{ uri: user.avatarUrl }} avatarStyle={styles.avatar} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron
          onPress={() => naviigateToUserForm(user)}
          iconProps={{ name: 'pencil' }}
          iconStyle={styles.iconEdit}
        />
        <ListItem.Chevron
          onPress={() => confirmUserDeletation(user)}
          iconProps={{ name: 'trash' }}
          iconStyle={styles.iconTrash}
        />
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList
        data={state.users}
        keyExtractor={(user) => `${user.id}`}
        renderItem={renderItems}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 25,
  },
  iconTrash: {
    fontSize: 25,
    color: 'red',
  },
  iconEdit: {
    fontSize: 25,
    color: 'orange',
  },
})
