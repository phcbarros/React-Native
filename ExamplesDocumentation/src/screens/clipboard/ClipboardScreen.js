import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Alert } from 'react-native'
import Clipboard, { useClipboard } from '@react-native-community/clipboard'
import { Button, TextInput, Card, Paragraph } from 'react-native-paper'

const ClipboardScreen = () => {
  const [textoCopiado, definirTextoCopiado] = useState('')
  const [textoInput, definirTextoInput] = useState('')
  const [textoCopiado2, definirTextoCopiado2] = useClipboard('')
  const [textoInput2, definirTextoInput2] = useState('')

  const fetchCopiedText = async () => {
    try {
      const textoDoClipboard = await Clipboard.getString()
      if (!textoDoClipboard)
        Alert.alert('Não há nenhum texto copiado no Clipboard')
      definirTextoCopiado(textoDoClipboard)
    } catch (error) {
      Alert.alert('Erro ao ler o clipboard')
    }
  }

  const copyToClipboard = () => {
    if (!textoInput) {
      Alert.alert('Nenhum texto foi copiado no Clipboard')
      return
    }

    Clipboard.setString(textoInput)
  }

  useEffect(() => {
    definirTextoCopiado2('')
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Card>
        <Card.Title
          title="Exemplo usando Clipboard"
          subtitle="Objeto Clipboard"
        />
        <Card.Content>
          <View style={styles.marginTop20}>
            <TextInput
              label="Texto copiado para o Clipboard"
              value={textoInput}
              onChangeText={(texto) => definirTextoInput(texto)}
            />
            <Button
              style={styles.marginTop10}
              mode="contained"
              onPress={() => copyToClipboard()}>
              <Text>Copiar</Text>
            </Button>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Button mode="contained" onPress={() => fetchCopiedText()}>
              <Text>Exibir texto copiado</Text>
            </Button>
            <Paragraph style={styles.copiedText}>{textoCopiado}</Paragraph>
          </View>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title
          title="Exemplo usando Clipboard"
          subtitle="Hook useClipboard"
        />
        <Card.Content>
          <Paragraph>
            Usando onContentSizeChange do Texto para exibir o valor colado no
            campo
          </Paragraph>
          <View style={styles.marginTop20}>
            <TextInput
              mode="outlined"
              label="Texto copiado para o Clipboard"
              value={textoInput2}
              onChangeText={(texto) => definirTextoInput2(texto)}
              onContentSizeChange={() => definirTextoCopiado2(textoInput2)}
            />
          </View>
          <Paragraph style={styles.copiedText}>{textoCopiado2}</Paragraph>
        </Card.Content>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  copiedText: {
    marginTop: 10,
    fontSize: 20,
    color: 'red',
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
})

export default ClipboardScreen
