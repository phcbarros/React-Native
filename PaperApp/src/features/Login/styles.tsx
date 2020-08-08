import { Text, TextInput, Button, DefaultTheme } from 'react-native-paper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Top = styled.View`
  flex: 1;
  max-height: 400px;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.View`
  border: 1px white;
  justify-content: center;
  align-items: center;
  background: #000;
`

export const Content = styled.View`
  flex: 1;
  margin: 20px;
`

export const TextInputContainer = styled.View`
  margin-top: 10px;
`

export const SignupContainer = styled.View`
  margin-top: 20px;
  margin-left: -15px;
  margin-right: -15px;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkButton = styled(Button)``

export const SmallText = styled(Text)`
  color: ${DefaultTheme.colors.primary};
`

export const LoginTextInput = styled(TextInput)`
  font-size: 16px;
  background-color: transparent;
`

export const LoginButton = styled(Button)`
  margin-top: 40px;
  height: 50px;
  justify-content: center;
`
