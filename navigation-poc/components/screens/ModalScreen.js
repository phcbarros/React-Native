import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./style";

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ModalScreen;
