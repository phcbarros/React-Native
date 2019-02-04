import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
  { id: 1, nome: 'Paulo', nota: 10 },
  { id: 2, nome: 'Maria', nota: 0 },
  { id: 3, nome: 'Lucas', nota: 8.1 },
  { id: 4, nome: 'Joana', nota: 9.9 },
  { id: 5, nome: 'Lucia', nota: 4.3 },
  { id: 6, nome: 'Simone', nota: 2.0 },
  { id: 7, nome: 'Diego', nota: 1.2 },
  { id: 8, nome: 'Valmir', nota: 3.4 },
  { id: 9, nome: 'Pedro', nota: 6.5 },

  { id: 11, nome: 'Paulo', nota: 10 },
  { id: 12, nome: 'Maria', nota: 0 },
  { id: 13, nome: 'Lucas', nota: 8.1 },
  { id: 14, nome: 'Joana', nota: 9.9 },
  { id: 15, nome: 'Lucia', nota: 4.3 },
  { id: 16, nome: 'Simone', nota: 2.0 },
  { id: 17, nome: 'Diego', nota: 1.2 },
  { id: 18, nome: 'Valmir', nota: 3.4 },
  { id: 19, nome: 'Pedro', nota: 6.5 },
]

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#ddd',
  borderWidth: 1.5,
  borderColor: '#222',

  //Flex main-axis default column
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'

}

export const Aluno = props => 
  <View style={itemEstilo}>
    { /* 
      JustifyContent aplicado no main-axis que nesse caso foi alterado para a linha,
      e como o seu valor é `space-between` os Texts ficam separados. 
      AlignItens é aplicado no cross-axis que nesse caso é a coluna, 
      e como seu valor é `center` os Texts ficam alinhados no centro do componente View
    */}
    <Text>{props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>{props.nota}</Text>
  </View>

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />
  }
  return (
    <ScrollView>
      <FlatList 
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}>
      </FlatList>
    </ScrollView>
  )
}