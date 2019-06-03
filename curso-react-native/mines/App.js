import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import params from './src/configurations/configuration'
import MineField from './src/components/mine-field/MineField'
import Header from './src/components/header/Header'
import LevelSelection from './src/screens/level-selection/LevelSelection'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hasExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
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
      showLevelSelection: false,
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

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)

    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns!!! Você venceu!!!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = (level) => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <LevelSelection
          onLevelSelected={this.onLevelSelected}
          isVisible={this.state.showLevelSelection}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
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
