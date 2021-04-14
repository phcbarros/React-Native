import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
  return (
    <View style={style.flexV2}>
      <Quadrado cor="#ff801a" lado={20} />
      <Quadrado cor="#50d1f6" lado={30} />
      <Quadrado cor="#dd22c1" lado={40} />
      <Quadrado cor="#8312ed" lado={50} />
      <Quadrado cor="#36c9a7" lado={50} />
    </View>
  );
};

const style = StyleSheet.create({
  flexV2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
