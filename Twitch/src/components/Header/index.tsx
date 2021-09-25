import React from 'react'
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import colors from '../../styles/colors'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.ContainerAvatar>
        <S.Avatar source={{ uri: 'https://github.com/phcbarros.png' }} />
        <S.OnlineStatus />
      </S.ContainerAvatar>
      <S.RightSide>
        <S.Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </S.Button>
        <S.Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </S.Button>
        <S.Button>
          <Feather name="search" size={26} color={colors.black} />
        </S.Button>
      </S.RightSide>
    </S.Container>
  )
}
