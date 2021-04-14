import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/NumAleatorio';
//import Titulo from './components/Titulo';
//import Contador from './components/contator/ContadorV2';
//import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <Quadrado />
      <Quadrado cor="#900" />
      <Quadrado cor="#090" />
      {/* <Contador />
      <DigiteSeuNome />
      <Contador inicial={1} passo={13} /> 
      <Titulo titulo="Cadastro de produto" subTitulo="Tela de cadastro de produto" />
      <MinMax min={1} max={2} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} />
      <Aleatorio min={1} max={60} /> */}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
