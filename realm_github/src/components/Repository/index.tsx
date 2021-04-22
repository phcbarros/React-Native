import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { RepositorySchema } from '../../types/types'

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
} from './styles'

type Props = {
  data: RepositorySchema
  onRefresh: () => void
}

const Repository = ({ data, onRefresh }: Props) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
      <Refresh onPress={onRefresh}>
        <Icon name="refresh" size={16} color="#7159c1" />
        <RefreshText>Atualizar</RefreshText>
      </Refresh>
    </Container>
  )
}

export default Repository
