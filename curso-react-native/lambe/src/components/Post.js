import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Author from './Author'

class Post extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image} />
        <Author email="phcbcontato@outlook.com" nickaname="PH" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
})

export default Post
