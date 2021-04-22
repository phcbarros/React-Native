import React, { useState } from 'react'
import { Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Repository from '../../components/Repository'
import api from '../../services/api'
import getRealm from '../../services/realm'
import { GithubResponse, Repo, RepositorySchema } from '../../types/types'

import { Container, Title, Form, Input, Submit, List } from './styles'

const Main = () => {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  async function saveRepository(repository: GithubResponse) {
    const data: RepositorySchema = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    }

    const realm = await getRealm()
    realm.write(() => {
      realm.create('Repository', data)
    })
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`)
      await saveRepository(response.data)
      setInput('')
      setError(false)
      Keyboard.dismiss()
    } catch (err) {
      console.warn(err)
      setError(true)
    }
  }

  return (
    <Container>
      <Title>Repositorios</Title>
      <Form>
        <Input
          value={input}
          error={error}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório ..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#fff" />
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
        keyExtractor={(item: Repo) => String(item.id)}
        renderItem={({ item }) => <Repository data={item} />}
      />
    </Container>
  )
}

export default Main
