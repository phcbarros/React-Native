import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { login } from '../store/actions/user'

class Login extends React.Component {
  state = {
    name: 'Paulo Barros',
    email: '',
    password: '',
  }

  login = () => {
    this.props.onLogin({ ...this.state }) //sempre criar uma copia
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

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(login(user)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Login)
