import React from 'react'
import { View } from 'react-native'

import * as S from './styles'
import data from './data'

type ItemProps = {
  item: typeof data[0]
}

export function CategoryList() {
  const CategoryItem = ({ item }: ItemProps) => (
    <S.CategoryContainer>
      <S.CateroryImage source={item.source} />
      <S.CategoryName numberOfLines={1}>{item.name}</S.CategoryName>
      <S.CategoryStatus>
        <S.RedCircle />
        <S.Info>51.9k</S.Info>
      </S.CategoryStatus>
    </S.CategoryContainer>
  )

  return (
    <S.List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </S.List>
  )
}
