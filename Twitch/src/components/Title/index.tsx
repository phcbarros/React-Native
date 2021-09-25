import React from 'react'
import { View } from 'react-native'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export function Title({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
