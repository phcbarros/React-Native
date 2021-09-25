import React from 'react'
import { View } from 'react-native'

import * as S from './styles'
import streamThumbnail from '../../images/stream_thumbnail.jpg'

export function StreamList() {
  const StreamItem = () => (
    <S.StreamContainer>
      <S.StreamThumbnail source={streamThumbnail} />

      <S.StreamRow>
        <S.StreamColumn>
          <S.StreamHeader>
            <S.StreamAvatar />
            <S.StreamUsername numberOfLines={1}>phcbarros</S.StreamUsername>
          </S.StreamHeader>

          <S.StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </S.StreamDescription>

          <S.StreamCategory numberOfLines={1}>
            Science & Technology
          </S.StreamCategory>
        </S.StreamColumn>

        <S.TagRow>
          <S.TagView>
            <S.TagText>Portuguese</S.TagText>
          </S.TagView>
          <S.TagView>
            <S.TagText>Web Development</S.TagText>
          </S.TagView>
        </S.TagRow>
      </S.StreamRow>
    </S.StreamContainer>
  )

  return (
    <S.List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </S.List>
  )
}
