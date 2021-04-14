/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, Button, TextInput, View } from 'react-native';
import estilo from '../../estilo/estilo';
import Numero from './Numero';

export default class Mega extends React.Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumeros = (qtd) => {
    this.setState({ qtdNumeros: +qtd });
  };

  geraNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60, 10) + 1;
    return nums.includes(novo) ? this.geraNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce((n) => [...n, this.geraNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNumeros = () => {
    return this.state.numeros.map((numero) => {
      return <Numero key={numero} numero={numero} />
    });
  }

  render() {
    return (
      <>
        <Text style={estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType="numeric"
          style={{ borderBottomWidth: 1}}
          placehoder="Quantidade de números"
          value={`${this.state.qtdNumeros}`}
          onChangeText={this.alterarQtdNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
