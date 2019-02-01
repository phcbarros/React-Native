import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Padrao from '../estilos/padrao'

const validarProps = props => {
  return (
    <View style={Padrao.container}>
      <Text>{props.label} {props.ano + 2000}</Text>
    </View>
  )
}

validarProps.defaultProps = {
  label: 'Ano: '
}

validarProps.propTypes = {
  ano: PropTypes.number.isRequired
}

export default validarProps
