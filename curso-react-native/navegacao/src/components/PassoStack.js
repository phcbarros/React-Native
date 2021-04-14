import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

export default props => {
  return (
    <View style={style.container}>
      <View>
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() => props.navigation.navigate(props.avancar)}
          />
        ) : (
          false
        )}
      </View>
      <View style={style.container}>{props.children}</View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})
