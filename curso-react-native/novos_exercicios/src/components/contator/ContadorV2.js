import React, { useState } from 'react';
import { Text } from 'react-native';
import estilo from '../../estilo/estilo';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';

export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum((prev) => prev + 1);
  const dec = () => setNum((prev) => prev - 1);

  return (
    <>
      <Text style={estilo.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
     </>
  );
};