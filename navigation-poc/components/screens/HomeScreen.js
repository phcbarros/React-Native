import React from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import styles from "./style";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderButttonGoToDetails() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("Details", {
              itemId: 50,
              otherParam: "another param",
              title: "Details of this page"
            })
          }
        />
      </View>
    );
  }

  renderButtonGoToSettings() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }

  renderButtonOpenDrawer() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title="Show Drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }

  renderButtonSignOut() {
    return (
      <View style={styles.buttonContainer}>
        <Button title="Actually, sign me out :)" onPress={this.signOutAsync} />
      </View>
    );
  }

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    /* 1. Navigate to the Details route with params */
    return (
      <View style={styles.component}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        {this.renderButttonGoToDetails()}
        {this.renderButtonGoToSettings()}
        {this.renderButtonOpenDrawer()}
        {this.renderButtonSignOut()}
      </View>
    );
  }
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Home",
    headerRight: (
      <Button title="+1" onPress={navigation.getParam("increaseCount")} />
    ),
    headerLeft: (
      <Button title="Info" onPress={() => navigation.navigate("MyModal")} />
    )
  };
};

export default HomeScreen;
