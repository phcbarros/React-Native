import React from 'react'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles'
import { Header } from '~/components/Header'
import { Tabs } from '~/components/Tabs'
import { Menu } from '~/components/Menu'

export default function Main() {
  let offset = 0

  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY // soma a posição inicial com a posição final da animação

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset) // zera o valor do Animated
        translateY.setOffset(0) //  mantém a posição onde a animação foi finalizada
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset) //  mantém a posição onde a animação foi finalizada
        translateY.setValue(0) // zera o valor do Animated
      })
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380], // valor da variável translateY
                    outputRange: [-50, 0, 380], // mapea o valor do translateY para até onde ele pode chegar
                    extrapolate: 'clamp', // evita que passe dos valores definidos em inputRange e outputRange
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 220.000.56</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 4.000,00 recebida de Elisa Barros hoje às
                15:00h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  )
}
