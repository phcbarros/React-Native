import React, { Fragment } from 'react';
import { Text } from 'react-native';
import estilo from '../estilo/estilo';

export default ({ titulo, subTitulo }) => (
  <Fragment>
    <Text style={estilo.txtG}>{titulo}</Text>
    <Text>{subTitulo}</Text>
  </Fragment>
);
