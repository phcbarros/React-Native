import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Settings"
  };
};

export default SettingsScreen;
