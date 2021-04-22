import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Repository from '../../components/Repository'

import { Container, Title, Form, Input, Submit, List } from './styles'

const Main = () => {
  return (
    <Container>
      <Title>Repositorios</Title>
      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório ..."
        />
        <Submit onPress={() => {}}>
          <Icon name="add" size={22} color={'#fff'} />
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'repo',
            stars: 123,
            forks: 40,
            description: 'fafdafaf fadaf',
          },
        ]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Repository data={item} />}
      />
    </Container>
  )
}

export default Main
