import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomInput
          placeholder="Nome"
          autoFocus={true}
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        />
        <CustomInput
          placeholder="E-mail"
          autoFocus={true}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <CustomInput
          placeholder="Senha"
          autoFocus={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <CustomButton onPress={() => {}} label="Salvar" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Register
