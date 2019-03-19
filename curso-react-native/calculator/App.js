import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Botao from "./src/components/botao";
import Display from "./src/components/display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};
export default class App extends Component {
  state = { ...initialState }; //clone do initialState

  addDigit = n => {
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    if (n === "." && !clearDisplay && this.state.displayValue.includes("."))
      return;
    const current = clearDisplay ? "" : this.state.displayValue;
    const displayValue = current + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = operation => {
    if (this.state.current === "0") {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const values = [...this.state.values];
      try {
        console.table(values);
        console.log(operation);
        //if (!equals)
        values[0] = eval(`${values[0]} ${operation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Display displayValue={this.state.displayValue} />
        <View style={styles.buttons}>
          <Botao label="AC" triple onClick={this.clearMemory} />
          <Botao label="/" operation onClick={this.setOperation} />
          <Botao label="7" onClick={this.addDigit} />
          <Botao label="8" onClick={this.addDigit} />
          <Botao label="9" onClick={this.addDigit} />
          <Botao label="*" operation onClick={this.setOperation} />
          <Botao label="4" onClick={this.addDigit} />
          <Botao label="5" onClick={this.addDigit} />
          <Botao label="6" onClick={this.addDigit} />
          <Botao label="-" operation onClick={this.setOperation} />
          <Botao label="1" onClick={this.addDigit} />
          <Botao label="2" onClick={this.addDigit} />
          <Botao label="3" onClick={this.addDigit} />
          <Botao label="+" operation onClick={this.setOperation} />
          <Botao label="0" double onClick={this.addDigit} />
          <Botao label="." onClick={this.addDigit} />
          <Botao label="=" operation onClick={this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
