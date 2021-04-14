import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';

export default () => {
  const [nome, setNome] = useState('Teste');

  return (
    <>
      <Text>{nome}</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(value) => setNome(value)}
      />
    </>
  );
};
