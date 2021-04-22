import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Repo } from '../../types/types'

import { Container, Name, Description, Stats, Stat, StatCount } from './styles'

type Props = {
  data: Repo
}

const Repository = ({ data }: Props) => {
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
    </Container>
  )
}

export default Repository
