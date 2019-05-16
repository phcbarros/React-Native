import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    /* 1. Navigate to the Details route with params */
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
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

HomeScreen.navigationOptions = {
  title: "Home"
};

export default HomeScreen;
