import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  DatePickerIOS,
  Alert,
  DatePickerAndroid,
  Platform,
} from 'react-native'
import commonStyles from '../../resources/commonStyles'
import moment from 'moment'

export default class CreateTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    return {
      desc: '',
      date: new Date(),
    }
  }

  save = () => {
    if (!this.state.desc.trim()) {
      Alert.alert('Dados inválidos', 'Informe uma descrição para a tarefa.')
      return
    }
    const data = { ...this.state }
    this.props.onSave(data)
  }

  handleDateAndroidChanged = async () => {
    // DatePickerAndroid.open({
    //   date: this.state.date,
    // }).then((e) => {
    //   if (e.action !== DatePickerAndroid.dismissedAction) {
    //     const momentDate = moment(this.state.date)
    //     momentDate.date(e.day)
    //     momentDate.month(e.month)
    //     momentDate.year(e.year)
    //     this.setState({ date: momentDate.toDate() })
    //   }
    // })
    try {
      const { action, day, month, year } = await DatePickerAndroid.open({
        date: this.date,
        mode: 'spinner',
      })
      if (action !== DatePickerAndroid.dismissedAction) {
        const momentDate = moment(this.state.date)
        momentDate.date(day)
        momentDate.month(month)
        momentDate.year(year)
        this.setState({ date: momentDate.toDate() })
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
      Alert.alert('Erro', 'Não foi possível abrir o date picker')
    }
  }

  render() {
    let datePicker = null
    if (Platform.OS === 'ios') {
      datePicker = (
        <DatePickerIOS
          mode="date"
          date={this.state.date}
          onDateChange={(date) => this.setState({ date })}
        />
      )
    } else {
      datePicker = (
        <TouchableOpacity onPress={this.handleDateAndroidChanged}>
          <Text style={styles.date}>
            {moment(this.state.date).format('ddd, D [de] MMMM [de] YYYY')}
          </Text>
        </TouchableOpacity>
      )
    }

    return (
      <Modal
        onRequestClose={this.props.onCancel}
        visible={this.props.isVisible}
        animationType="slide"
        transparent={true}
        onShow={() => this.setState({ ...this.getInitialState() })}>
        <ButtonBackground onCancel={this.props.onCancel} />
        <View style={styles.container}>
          <Text style={styles.header}>Nova Tarefa!</Text>
          <TextInput
            placeholder="Descrição..."
            style={styles.input}
            onChangeText={(desc) => this.setState({ desc })}
            value={this.state.desc}
          />
          {datePicker}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.props.onCancel}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.save}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ButtonBackground onCancel={this.props.onCancel} />
      </Modal>
    )
  }
}

const ButtonBackground = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onCancel}>
      <View style={styles.offset} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  offset: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.default,
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.default,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    width: '90%',
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 6,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center',
  },
})
