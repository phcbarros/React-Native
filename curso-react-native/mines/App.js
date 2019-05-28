import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import params from "./src/configurations/configuration";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Campo Minado!!</Text>
        <Text style={styles.instructions}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
