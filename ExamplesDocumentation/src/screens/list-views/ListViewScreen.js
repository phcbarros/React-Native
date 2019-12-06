import React from 'react'
import { View, ScrollView } from 'react-native'
import { MyFlatList } from 'components/my-flat-list'
import { MySectionList } from 'components/my-section-list'

const users = [{ name: 'Paulo' }, { name: 'Elisa' }]
const padrinhos = [
  {
    title: 'Madrinhas',
    data: [
      'Angélica',
      'Jéssica',
      'Janina',
      'Jovana',
      'Érika',
      'Flávia',
      'Gina',
      'Rosangela',
    ],
  },
  {
    title: 'Padrinhos',
    data: [
      'Rodrigo',
      'Ian',
      'Jonathan',
      'André',
      'Mauro',
      'Diego',
      'Rodrigo',
      'Alaércio',
    ],
  },
]

const ListViewScreen = () => {
  return (
    <ScrollView>
      <MyFlatList data={users} />
      <MySectionList data={padrinhos} />
    </ScrollView>
  )
}

export default ListViewScreen
