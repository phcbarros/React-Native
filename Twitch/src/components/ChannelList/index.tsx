import React from 'react'

import * as S from './styles'

export function ChannelList() {
  const ChannelItem = () => (
    <S.ChannelContainer>
      <S.LeftSide>
        <S.ContainerAvatar>
          <S.Avatar
            source={{ uri: 'https://github.com/rocketseat-content.png' }}
          />
        </S.ContainerAvatar>
        <S.Column>
          <S.Username>rocketseat_oficial</S.Username>
          <S.Info>36 new videos</S.Info>
        </S.Column>
      </S.LeftSide>

      <S.RightSide>
        <S.WhiteCircle />
      </S.RightSide>
    </S.ChannelContainer>
  )

  return (
    <S.List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </S.List>
  )
}

export default ChannelList
