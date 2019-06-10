import React from 'react'
import { ActivityIndicator, View, StyleSheet, AsyncStorage } from 'react-native'
import axios from 'axios'

export default class AuthOrApp extends React.Component {
  componentWillMount = async () => {
    const json = await AsyncStorage.getItem('userData')
    const userData = JSON.parse(json) || {}

    if (userData.token) {
      axios.defaults.headers.common['Authorization'] = `bearer ${
        userData.token
      }`
      this.props.navigation.navigate('Home', userData)
    } else {
      this.props.navigation.navigate('Auth')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
})
