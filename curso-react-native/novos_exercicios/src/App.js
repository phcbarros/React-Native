import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/NumAleatorio';
//import Titulo from './components/Titulo';
//import Contador from './components/contator/ContadorV2';
//import DigiteSeuNome from './components/DigiteSeuNome';
//import FlexBox1 from './components/layout/FlexBoxV1';
//import FlexBox2 from './components/layout/FlexBoxV2';
import FlexBox3 from './components/layout/FlexBoxV3';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      <View style={style.Container}>
        <FlexBox3 />
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
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
