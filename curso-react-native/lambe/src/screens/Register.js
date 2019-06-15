import React from 'react'
import { View, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  }

  createUser = () => {
    this.props.onCreateUser(this.state)
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
          autoCapitalize="none"
          autoFocus={true}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <CustomInput
          placeholder="Senha"
          autoFocus={true}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <CustomButton onPress={this.createUser} label="Salvar" />
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
    onCreateUser: (user) => dispatch(createUser(user)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Register)
