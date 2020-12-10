import React, { useState } from 'react'
import {StyleSheet, View, Text, Button, Platform, FlatList, SafeAreaView} from 'react-native'
import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=101'

const App: () => React$Node = () => {
  const [validationMsg, setValidationMsg] = useState('Waiting')
  const [validationStatus, setValidationStatus] = useState('')
  const [pokemon, setPokemon] = useState([])

  const onConnectPress = () => {
    axios(URL)
      .then((res) => {
        console.log('**************')
        console.log(res)
        console.log('**************')
        setValidationMsg('Valid certificate, connected.')
        setValidationStatus('success')

        console.log(res.data.results)
        setPokemon((prev) => [...prev, ...res.data.results])
      })
      .catch(() => {
        setValidationMsg('Certificate does not match, connection refused')
        setValidationStatus('failed')
      })
  }

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.container}>
      <Text style={styles.title}>React Native SSL Pinning</Text>
      <Text style={styles.title}>({Platform.OS.toUpperCase()})</Text>
      <Text style={styles.header}>Certificate status:</Text>
      <Text
        style={[
          styles.status,
          validationStatus === 'success' && styles.success,
          validationStatus === 'failed' && styles.failed,
        ]}>
        {validationMsg}
      </Text>
      <View style={styles.btnContainer}>
        <Button title={`Test ${URL}`} onPress={onConnectPress} />
      </View>
      <FlatList
        data={pokemon}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item  }) => {
          console.log('item',  item)
          return (
            <View style={{ alignItems: "flex-start", flex: 1}}>
              <Text>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    paddingTop: 46,
    fontSize: 18,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  failed: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    paddingHorizontal: 16,
    marginTop: 24,
  },
})

export default App
