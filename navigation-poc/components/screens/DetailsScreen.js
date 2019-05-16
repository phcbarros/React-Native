import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class DetailsScreen extends React.Component {
  state = { modalVisible: false };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  renderModal() {
    return (
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
    );
  }

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
        {this.renderModal()}
      </View>
    );
  }
}
