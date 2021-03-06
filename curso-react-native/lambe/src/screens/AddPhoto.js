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
import { connect } from 'react-redux'
import ImagePicker from 'react-native-image-picker'
import CustomButton from '../components/CustomButton'
import { addPost } from '../store/actions/posts'

const NO_USER = 'Você precisa estar logado para adicionar uma imagem!'

class AddPhoto extends React.Component {
  state = {
    image: null,
    comment: '',
  }

  componentDidUpdate = (prevProps) => {
    console.log(prevProps, this.props)
    if (prevProps.loading && !this.props.loading) {
      this.setState({ image: null, comment: null })
      this.props.navigation.navigate('Feed')
    }
  }

  pickImage = () => {
    if (!this.props.name) {
      Alert.alert('Ops!', NO_USER)
      return
    }
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
    if (!this.props.name) {
      Alert.alert('Ops!', NO_USER)
      return
    }
    this.props.onAddPost({
      id: this.props.userId,
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={this.state.image} style={styles.image} />
          </View>
          <CustomButton onPress={this.pickImage} label="Escolha a foto" />
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            editable={this.props.name !== null}
            value={this.state.comment}
            onChangeText={(comment) => this.setState({ comment })}
          />
          <CustomButton
            onPress={this.save}
            label="Salvar"
            disabled={this.props.loading}
          />
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
})

const mapStateToProps = ({ user, posts }) => ({
  userId: user.id,
  name: user.name,
  email: user.email,
  loading: posts.isUploading,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (post) => dispatch(addPost(post)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPhoto)
