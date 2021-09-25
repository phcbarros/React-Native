import React, { useMemo } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { CategoryList } from '../../components/CategoryList'
import { ChannelList } from '../../components/ChannelList'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { StreamList } from '../../components/StreamList'
import { Title } from '../../components/Title'

import * as S from './styles'

interface Item {
  key: string
  render: () => JSX.Element
  isTitle?: boolean
}

export function Following() {
  const { data, indexes } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Online Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <StreamList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <ChannelList />,
      },
    ]

    // Array que contém aopenas os índices dos elementos que são títulos
    const indexes: number[] = []

    items.forEach((item, index) => item.isTitle && indexes.push(index))

    return {
      data: items,
      indexes,
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Container>
        <Header></Header>
        <S.Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
            contentContainerStyle={{
              paddingBottom: 80,
            }}
          />
        </S.Main>
      </S.Container>
    </S.Wrapper>
  )
}
