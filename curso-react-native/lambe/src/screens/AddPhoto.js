import React from 'React'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import CustomButton from '../components/CustomButton'

class AddPhoto extends React.Component {
  state = {
    image: null,
    comment: '',
  }

  pickImage = () => {
    console.log('aqio')
    ImagePicker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxHeight: 600,
        maxWidth: 800,
      },
      (res) => {
        if (!res.didCancel) {
          this.setState({ image: { uri: res.uri, base64: res.data } })
        }
      },
    )
  }

  save = async () => {
    Alert.alert('Imagem adicionada', this.state.comment)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <CustomButton onClick={this.pickImage} label="Escolha a foto" />
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            value={this.state.comment}
            onChangeText={(comment) => this.setState({ comment })}
          />
          <CustomButton onClick={this.save} label="Salvar" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  buttonDisabled: {
    backgroundColor: '#AAA',
  },
})

export default AddPhoto
