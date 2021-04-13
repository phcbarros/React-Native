import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo/estilo';

export default ({ min, max }) => {
  return (
    <Text style={estilo.txtG}>
      O valor {max} é maior que o valor {min}
    </Text>
  );
};
