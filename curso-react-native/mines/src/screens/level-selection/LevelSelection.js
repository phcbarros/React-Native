import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'

export default (props) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <ButtonLevel
            backgroundColor={styles.bgEasy}
            level={0.1}
            label="Fácil"
            onLevelSelected={props.onLevelSelected}
          />
          <ButtonLevel
            backgroundColor={styles.bgNormal}
            level={0.2}
            label="Normal"
            onLevelSelected={props.onLevelSelected}
          />
          <ButtonLevel
            backgroundColor={styles.bgHard}
            level={0.3}
            label="Difícil"
            onLevelSelected={props.onLevelSelected}
          />
        </View>
      </View>
    </Modal>
  )
}

const ButtonLevel = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.backgroundColor]}
      onPress={() => props.onLevelSelected(props.level)}>
      <Text style={styles.buttonLabel}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
})
