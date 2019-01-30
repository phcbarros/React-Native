import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import Simples from './componentes/simples'
import ParImpar from './componentes/parImpar'
import { Inverter, MegaSena } from './componentes/multi'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível'/>
        <ParImpar numero={2} />
        <Inverter texto='React Native' />
        <MegaSena numeros={6}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})