import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends React.Component {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Paulo Barros',
        email: 'phcbcontato@outlook.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'Elisa Fernandes',
            comment: 'Que lindo amor!',
          },
          {
            nickname: 'Ian Muller',
            comment: 'Não é Pokémon =/',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Paulo Barros',
        email: 'phcbcontato@outlook.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: [
          {
            nickname: 'Elisa Fernandes',
            comment: 'Bora!',
          },
        ],
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <Post {...item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

export default Feed
