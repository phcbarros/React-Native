import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo/estilo';

export default ({ min, max }) => {
  const delta = max - min + 1;
  const aleatorio = Math.floor(Math.random() * delta) + min;
  return <Text style={estilo.txtG}>O valor aleatório é {aleatorio}</Text>;
};
