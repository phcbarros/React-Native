import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends React.Component {
  render() {
    const { image, email, nickname, comments, id } = this.props
    const addComment = this.props.name ? <AddComment postId={id} /> : null
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Author email={email} nickname={nickname} />
        <Comments comments={comments} />
        {addComment}
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

const mapStateToProps = ({ user }) => ({ name: user.name })
export default connect(mapStateToProps)(Post)
