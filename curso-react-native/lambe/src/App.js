import React from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './navigator/Navigator'
import { setMessage } from './store/actions/message'

class App extends React.Component {
  componentDidUpdate = () => {
    const { title, text } = this.props

    if (text && text.toString().trim()) {
      Alert.alert(title.trim || 'Mensagem', text)
      this.props.clearMessage()
    }
  }

  render() {
    return <Navigator />
  }
}

const mapStateToProps = ({ message }) => {
  return {
    title: message.title,
    text: message.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessage: () => dispatch(setMessage({ title: '', text: '' })),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
