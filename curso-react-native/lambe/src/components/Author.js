import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Avatar from './Avatar'

export default (props) => {
  return (
    <View style={styles.container}>
      <Avatar email={props.email} style={styles.avatar} />
      <Text style={styles.nickname}>{props.nickname}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginHorizontal: 15,
  },
  nickname: {
    color: '#444',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
})
