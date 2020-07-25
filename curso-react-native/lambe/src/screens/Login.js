import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { login } from '../store/actions/user'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  componentWillUpdate(prevProps) {
    if (prevProps.user.token && this.props.user.token)
      this.props.navigation.navigate('Profile')
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.isLoading && !this.props.isLoading) {
      return this.props.navigation.navigate('Feed')
    }
  }

  login = () => {
    this.props.onLogin({ ...this.state }) //sempre criar uma copia
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomInput
          autoCapitalize="none"
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
        <CustomButton
          onPress={this.login}
          label="Login"
          disabled={this.props.isLoading}
        />
        <CustomButton
          onPress={() => this.props.navigation.navigate('Register')}
          label="Criar nova conta"
          disabled={this.props.isLoading}
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

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading,
  user: user,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
