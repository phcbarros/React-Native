import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/configurations/configuration'
import MineField from './src/components/mine-field/MineField'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
} from './src/business/game'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return Math.ceil(rows * cols * params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)

    const lost = hasExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeuuuu!', 'Que burro, dá zero pra ele!')
    }

    if (won) {
      Alert.alert('Parabéns!!! Você venceu!!!')
    }

    this.setState({ board, won, lost })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Campo Minado!!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
})
