import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
  return (
    <View style={style.flexV2}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </View>
  );
};

const style = StyleSheet.create({
  flexV2: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly', // main-axis
    alignItems: 'flex-end', // cross-axis
    backgroundColor: '#000',
  },
});
