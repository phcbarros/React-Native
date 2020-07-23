import React from 'React'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CustomButton from '../components/CustomButton'
import Avatar from '../components/Avatar'
import { logout } from '../store/actions/user'

class Profile extends React.Component {
  logout = () => {
    this.props.onLogout()
    this.props.navigation.navigate('Auth')
  }

  render() {
    const { name, email } = this.props

    return (
      <View style={styles.container}>
        <Avatar email={email} style={styles.avatar} />
        <Text style={styles.nickname}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <CustomButton onPress={this.logout} label="Sair" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
  },
})

const mapStateToProps = ({ user }) => ({ name: user.name, email: user.email })
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onLogout: logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
