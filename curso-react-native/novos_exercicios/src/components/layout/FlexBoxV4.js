import React from 'react';
import { View, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={style.flexV4}>
      <View style={style.v0} />
      <View style={style.v1} />
      <View style={style.v2} />
    </View>
  );
};

const style = StyleSheet.create({
  flexV4: {
    flexGrow: 1,
    width: 100,
    backgroundColor: '#000',
  },
  v0: {
    backgroundColor: '#36c9a7',
    height: 300,
  },
  v1: {
    backgroundColor: '#ff801a',
    flexGrow: 9,
  },
  v2: {
    backgroundColor: '#dd22c1',
    flexGrow: 1,
  },
});
