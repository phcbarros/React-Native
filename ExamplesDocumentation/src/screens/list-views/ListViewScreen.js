import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MyFlatList } from '@/components/my-flat-list'
import { MySectionList } from '@/components/my-section-list'

const users = [{ id: 1, name: 'Paulo' }, { id: 2, name: 'Elisa' }]
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
    <SafeAreaView style={{ flex: 1 }}>
      <MyFlatList data={users} />
      <MySectionList data={padrinhos} />
    </SafeAreaView>
  )
}

export default ListViewScreen
