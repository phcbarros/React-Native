import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/NumAleatorio';
import Titulo from './components/Titulo'

export default () => (
  <SafeAreaView style={style.App}>
    <Titulo titulo="Cadastro de produto" subTitulo="Tela de cadastro de produto" />
    {/* <MinMax min={1} max={2} /> */}
    {/* <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
