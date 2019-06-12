import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  login = () => {
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          autoFocus={true}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <CustomButton onPress={this.login} label="Login" />
        <CustomButton onPress={() => {}} label="Criar nova conta..." />
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
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
  },
})

export default Login
