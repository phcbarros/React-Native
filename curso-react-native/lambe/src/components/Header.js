import React from 'react'
import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import icon from '../../assets/imgs/icon.png'

class Header extends React.Component {
  render() {
    const name = this.props.name || 'Anonymous'
    const gravatar = this.props.email ? (
      <Avatar email={this.props.email} style={styles.avatar} />
    ) : null
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Lambe lambe</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.name}>{name}</Text>
          {gravatar}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    marginLeft: 10,
  },
})

const mapStateToProps = ({ user }) => ({ name: user.name, email: user.email })

export default connect(mapStateToProps)(Header)
