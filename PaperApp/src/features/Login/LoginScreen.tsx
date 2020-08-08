import React, { useState, useCallback } from 'react'
import { TextInput, DefaultTheme } from 'react-native-paper'
import {
  Top,
  Container,
  LogoContainer,
  Content,
  LoginTextInput,
  TextInputContainer,
  LoginButton,
  SignupContainer,
  LinkButton,
  SmallText,
} from './styles'
import RiotLogo from '~/assets/riot-games.svg'
import { Alert } from 'react-native'

const onLogin = () => {
  Alert.alert('Sucesso!', 'Bem vindo invocador!')
}

const onRecoveryPassword = () => {
  Alert.alert(
    'Sucesso!',
    'Não se preocupe invocador, iremos te mandar um email para a recuperação da senha!',
  )
}

const onSignUp = () => {
  Alert.alert('Sucesso!', 'Mais um invocador recrutado!')
}

const LoginScreen: React.FC = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  const tooglePassword = useCallback(() => {
    console.log('toogle password')
    setShowPassword((p) => !p)
  }, [])

  return (
    <Container>
      <Top>
        <LogoContainer>
          <RiotLogo width={200} height={200} />
        </LogoContainer>
      </Top>
      <Content>
        <TextInputContainer>
          <LoginTextInput
            value={user}
            onChangeText={setUser}
            mode="flat"
            label="Nome de invocador"
          />
        </TextInputContainer>
        <TextInputContainer>
          <LoginTextInput
            value={password}
            onChangeText={setPassword}
            mode="flat"
            label="Senha"
            secureTextEntry={showPassword}
            right={
              <TextInput.Icon
                name={showPassword ? 'eye' : 'eye-off'}
                onPress={tooglePassword}
                color={DefaultTheme.colors.placeholder}
              />
            }
          />
        </TextInputContainer>
        <SignupContainer>
          <LinkButton uppercase={false} onPress={onRecoveryPassword}>
            <SmallText>Esqueceu a senha?</SmallText>
          </LinkButton>
          <LinkButton uppercase={false} onPress={onSignUp}>
            <SmallText>Criar uma conta</SmallText>
          </LinkButton>
        </SignupContainer>
        <LoginButton mode="contained" onPress={onLogin}>
          Login
        </LoginButton>
      </Content>
    </Container>
  )
}

export default LoginScreen
