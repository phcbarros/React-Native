import React, {useState} from 'react'
import {Button, SafeAreaView, StyleSheet, View} from 'react-native'
import {ModalMessage} from '../components/ModalMessage'
import {ModalView} from '../components/ModalView'

export default function Modal() {
  const [exibirModal, setExibirModal] = useState(false)

  function closeModal() {
    setExibirModal(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Button title="Exibir modal" onPress={() => setExibirModal(true)} />
        <ModalView
          visible={exibirModal}
          animationType="fade"
          closeModal={closeModal}>
          <ModalMessage
            title="Aviso"
            message="Nenhum item selecionado"
            onPress={closeModal}
          />
        </ModalView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
})
