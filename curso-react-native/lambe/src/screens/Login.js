import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

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
        <CustomInput
          placeholder="E-mail"
          autoFocus={true}
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <CustomInput
          placeholder="Senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <CustomButton onPress={this.login} label="Login" />
        <CustomButton
          onPress={() => this.props.navigation.navigate('Register')}
          label="Criar nova conta..."
        />
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

export default Login
