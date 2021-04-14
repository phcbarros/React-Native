import React from 'react'
import {View, StyleSheet, Button} from 'react-native'

export default props => {
  return (
    <View style={style.container}>
      <View style={{ 
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        {props.voltar ? (
          <Button title="Voltar" onPress={() => props.navigation.goBack()} />
        ) : (
          false
        )}
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
