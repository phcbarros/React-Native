import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../resources/commonStyles'

export default (props) => {
  let check = null

  if (props.doneAt !== null) {
    check = (
      <View style={styles.done}>
        <Icon name="check" color={commonStyles.colors.secondary} size={20} />
      </View>
    )
  } else {
    ;<View style={styles.pending} />
  }

  const descStyle = props.doneAt ? { textDecorationLine: 'line-through' } : {}

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>{check}</View>
      <View>
        <Text style={[styles.description, descStyle]}>{props.desc}</Text>
        <Text style={styles.date}>
          {moment()
            .locale('pt-br')
            .format('ddd, D [de] MMMM')}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#AAA',
  },
  checkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  pending: {
    borderWidth: 1,
    height: 25,
    width: 25,
    borderRadius: 5,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
})
