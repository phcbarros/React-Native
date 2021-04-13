import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MinMax from './components/MinMax';
import NumRandom from './components/NumAleatorio';

export default () => (
  <SafeAreaView style={style.App}>
    <MinMax min={1} max={2} />
    <NumRandom min={1} max={10} />
    <NumRandom min={10} max={18} />
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
