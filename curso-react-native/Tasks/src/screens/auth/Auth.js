import React from 'react'
import {
  StyleSheet
  Alert,
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native'
import commonStyles from '../../resources/commonStyles'
import backgroundImage from '../../../assets/imgs/login.jpg'

export default class Auth extends React.Component {
  state = {
    stageNew: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  singinOrSignup = () => {
    if(this.state.stageNew) {
      Alert.alert('Sucesso', 'Criar conta')
    }
    else {
      Alert.alert('Sucesso', 'Logar')
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.text}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            {this.state.stageNew ? 'Crie a sua conta': 'Informe seus dados'}
          </Text>
          {this.state.stageNew && 
            <TextInput placeholder='Nome' style={styles.input}
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })} />
          }
          <TextInput placeholder='E-mail' style={styles.input}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })} />
          <TextInput placeholder='Senha' style={styles.input}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })} />
          <TextInput placeholder='Confirmar Senha' style={styles.input}
            value={this.state.confirmPassword}
            onChangeText={(confirmPassword) => this.setState({ confirmPassword })} />
          <TouchableOpacity onPress={this.singinOrSignup}>
            <View style={styles.button}>
            <Text style={styles.buttonText}>
              {this.state.stageNew ? 'Registrar': 'Entrar'}
            </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{padding: 10}} onPress={() => this.setState({ stageNew: !this.state.stageNew})}>
          <Text style={styles.buttonText}>
            {this.state.stageNew ? 'Já possui conta?': 'Ainda não possui conta?'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
})