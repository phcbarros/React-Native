import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Top, Logo, Title, IconContainer } from './styles'
import logo from '../../assets/Nubank_Logo.png'
export default function Header({ translateY }) {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Paulo Barros</Title>
      </Top>
      <IconContainer
        style={{
          transform: [
            {
              rotate: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: ['0deg', '-180deg'],
              }),
            },
          ],
        }}>
        <Icon name="keyboard-arrow-down" size={20} color="#fff" />
      </IconContainer>
    </Container>
  )
}
