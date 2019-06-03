import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../../assets/imgs/today.jpg'
import commonStyles from '../../resources/commonStyles'
import Task from '../../components/task/Task'

export default class Agenda extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment()
                .locale('pt-br')
                .format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.tasksContainer}>
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Tarefa pendente" estimatedAt={new Date()} doneAt={null} />
          <Task
            desc="Tarefa concluída"
            estimatedAt={new Date()}
            doneAt={new Date()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  tasksContainer: {
    flex: 7,
  },
})
