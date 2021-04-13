import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo/estilo';

export default ({ min, max }) => {
  return (
    <Text style={estilo.txtG}>
      Valor aleatório entre {min} e {max} é {Math.floor(Math.random() * (max - min)) + min}
    </Text>
  );
};
