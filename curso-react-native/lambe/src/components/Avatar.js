import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default (Avatar = (props) => {
  return (
    <Gravatar
      style={[styles.avatar, props.style]}
      options={{
        email: props.email,
        secure: true,
      }}
    />
  )
})

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
  },
})
