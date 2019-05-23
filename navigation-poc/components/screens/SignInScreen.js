import React from "react";
import { View, Button, AsyncStorage } from "react-native";
import styles from "./style";

class SignInScreen extends React.Component {
  render() {
    return (
      <View style={styles.component}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("App");
  };
}

SignInScreen.navigationOptions = {
  title: "Please sign in"
};

export default SignInScreen;
