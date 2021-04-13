import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//import MinMax from './components/MinMax';
import Aleatorio from './components/NumAleatorio';

export default () => (
  <SafeAreaView style={style.App}>
    {/* <MinMax min={1} max={2} /> */}
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
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
