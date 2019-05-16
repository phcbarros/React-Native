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

  render() {
    /* 1. Navigate to the Details route with params */
    return (
      <View style={styles.component}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Ir para detalhes"
          onPress={() =>
            this.props.navigation.navigate("Details", {
              itemId: 50,
              otherParam: "outro parâmetro",
              title: "Details of this page"
            })
          }
        />
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
