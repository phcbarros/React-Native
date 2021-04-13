import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default (props) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: 150,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
