import React, { useState } from 'react'
import { Button } from 'react-native'
import { View, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'

export default ({ route, navigation }) => {
  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View style={styles.form}>
      <Input
        label="Name"
        style={null}
        leftIcon={{ name: 'account-circle' }}
        onChangeText={(name) => setUser((prev) => ({ ...prev, name }))}
        placeholder="Informe o nome"
        value={user.name}
      />
      <Input
        label="E-mail"
        leftIcon={{ name: 'email' }}
        onChangeText={(email) => setUser((prev) => ({ ...prev, email }))}
        placeholder="Informe o e-mail"
        value={user.email}
      />
      <Input
        label="URL do Avatar"
        leftIcon={{ name: 'camera' }}
        onChangeText={(avatarUrl) =>
          setUser((prev) => ({ ...prev, avatarUrl }))
        }
        placeholder="Informe a url do Avatar"
        value={user.avatarUrl}
        multiline={true}
      />
      <Button title="Salvar" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
})
