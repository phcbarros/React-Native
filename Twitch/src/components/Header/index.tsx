import React from 'react'
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { View } from 'react-native'
import colors from '../../styles/colors'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Avatar>
        <S.OnlineStatus />
      </S.Avatar>
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
