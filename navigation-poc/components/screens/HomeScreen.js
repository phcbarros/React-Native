import React from "react";
import { View, Text, Button } from "react-native";
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
    <View style={styles.buttonContainer}>
      <Button
        title="Go to Settings"
        onPress={() => this.props.navigation.navigate("Settings")}
      />
      />
    </View>;
  }

  render() {
    /* 1. Navigate to the Details route with params */
    return (
      <View style={styles.component}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        {this.renderButttonGoToDetails()}
        {this.renderButtonGoToSettings()}
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
