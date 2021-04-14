import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import estilo from '../../estilo/estilo';

export default (props) => {
  return (
    <View style={style.container}>
      <Text style={[estilo.txtG, style.num]}>{props.numero}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  num: {
    color: '#fff',
    alignSelf: 'center',
  },
});
