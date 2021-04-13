import React, { useState } from 'react';
import { Text, Button } from 'react-native';

export default (props) => {
  const { inicial = 0, passo = 1 } = props;

  let [contador, setContador] = useState(inicial);

  const increment = () => {
    setContador((prevValue) => prevValue + passo);
  };

  const decrement = () => {
    setContador((prevValue) => prevValue - passo);
  };

  return (
    <>
      <Text>{contador}</Text>
      <Button title="+" onPress={increment} />
      <Button title="-" onPress={decrement} />
    </>
  );
};
