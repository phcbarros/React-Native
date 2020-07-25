import React from 'react'
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

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
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
      </Content>

      <Tabs />
    </Container>
  )
}
