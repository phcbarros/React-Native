import React from "react";
import { View, Button } from "react-native";
import styles from "./style";

class NotificationScreen extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Button
          title="Go back home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default NotificationScreen;
