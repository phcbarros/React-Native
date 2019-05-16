import React from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10
  }
});

class DetailsScreen extends React.Component {
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

  renderButtonShowModal() {
    return (
      <View style={styles.buttonContainer}>
        <Button title="Exibir Modal" onPress={this.showModal} />
      </View>
    );
  }

  renderButtonUpdateTitle() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ title: "Updated!" })}
        />
      </View>
    );
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const id = navigation.getParam("itemId", "No-ID");
    //const otherParam = navigation.getParam("otherParam", "valor default");
    const otherParam = navigation.state.params.otherParam; //se nao exitir retornar null
    return (
      <View style={{ flex: 1, alignItems: "center", margin: 30 }}>
        <Text>Details Screen</Text>
        <Text>itemId: {id}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        {this.renderButtonShowModal()}
        {this.renderModal()}
        {this.renderButtonUpdateTitle()}
      </View>
    );
  }
}

DetailsScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam("title", "Details"),
    headerStyle: {
      backgroundColor: "#0064e1"
    },
    headerTintColor: "#fff", //font color
    headerTitleStyle: {
      //text adjusts
      fontWeight: "bold"
    }
  };
};

export default DetailsScreen;
