import React, { useState } from 'react'
import { View, Text } from 'react-native'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  )
}
