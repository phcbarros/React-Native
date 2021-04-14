/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, Button, TextInput } from 'react-native';
import estilo from '../../estilo/estilo';

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
    console.warn(this.state.qtdNumeros);
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce((n) => [...n, this.geraNumeroNaoContido(n)], []);
    this.setState({ numeros }, () => console.warn(this.state.numeros));
  };

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
        <Text>{this.state.numeros.join(',')}</Text>
      </>
    );
  }
}
