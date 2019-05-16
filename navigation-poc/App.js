import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
              otherParam: "outro parâmetro"
            })
          }
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  state = { modalVisible: false };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const id = navigation.getParam("itemId", "No-ID");
    //const otherParam = navigation.getParam("otherParam", "valor default");
    const otherParam = navigation.state.params.otherParam; //se nao exitir retornar null
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {id}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Exibir Modal" onPress={this.showModal} />
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View>
            <Text>Modal Aberto</Text>
            <Button title="Fechar Modal" onPress={this.hideModal} />
          </View>
        </Modal>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
