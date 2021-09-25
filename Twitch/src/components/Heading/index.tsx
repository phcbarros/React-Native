import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export function Heading({ children }: Props) {
  return (
    <S.Container>
      <S.HeadingText>{children}</S.HeadingText>
    </S.Container>
  )
}
