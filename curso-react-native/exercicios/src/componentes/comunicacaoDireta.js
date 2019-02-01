import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilos/padrao'

const fonte = { style: { fontSize: 30 } }

function filhosComProps (props) {
  return React.Children.map(props.children, c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Filho = props => (
  <View>
    <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
  </View>
)

export const Pai = props => (
  <View>
    <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
    {
      /* 
        //copia todos os elementos filhos porém não é possível passar as props do componente pai
        {props.children} 
      */
    }
    {
      /* {
        // Clona o elemento mas só funciona quando existe somente um filho e é possível passar as props do componente pai
        React.cloneElement(props.children, {...props, ...props.children.props})} 
      */
    }
    {filhosComProps(props)}
  </View>
)

export const Avo = props => (
  <View style={Padrao.container}>
    <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
    <Pai nome='Paulo' sobrenome={props.sobrenome}>
      <Filho nome='Melissa' />
      <Filho nome='Larissa' />
      <Filho nome='Antero' />
    </Pai>
    <Pai {...props} nome='Ian'>
      <Filho nome='João' />
      <Filho nome='Maria' />
      {/* <Filho {...props} nome='João' /> */}
    </Pai>
  </View>
)