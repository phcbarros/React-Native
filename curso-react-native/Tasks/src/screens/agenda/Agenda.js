import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../../assets/imgs/today.jpg'
import commonStyles from '../../resources/commonStyles'
import Task from '../../components/task/Task'
import CreateTask from '../create-task/CreateTask'
import Icon from 'react-native-vector-icons/FontAwesome'
import ActionButton from 'react-native-action-button'

export default class Agenda extends React.Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: 'Tarefa pendente',
        estimateAt: new Date(),
        doneAt: null,
      },
      {
        id: Math.random(),
        desc: 'Tarefa concluída',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
    ],
    visibleTasks: [],
    showDoneTasks: true,
    showAddTask: false,
  }

  componentDidMount = () => {
    this.filterTasks()
  }

  filterTasks = () => {
    let visibleTasks = null
    if (this.state.showDoneTasks) {
      visibleTasks = [...this.state.tasks]
    } else {
      const pending = (task) => task.doneAt === null
      visibleTasks = this.state.tasks.filter(pending)
    }
    this.setState({ visibleTasks })
  }

  toggleFilter = () => {
    this.setState(
      { showDoneTasks: !this.state.showDoneTasks },
      this.filterTasks,
    )
  }

  toggleTask = (id) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task = { ...task }
        task.doneAt = task.doneAt = task.doneAt ? null : new Date()
      }
      return task
    })
    this.setState({ tasks }, this.filterTasks)
  }

  addTasks = (task) => {
    Alert.alert(task.desc, task.date.toString())
    const tasks = [...this.state.tasks] //sempre clonar
    tasks.push({
      id: Math.random(),
      desc: task.desc,
      estimateAt: task.date,
      doneAt: null,
    })

    this.setState({ tasks, showAddTask: false }, this.filterTasks)
  }

  render() {
    return (
      <View style={styles.container}>
        <CreateTask
          isVisible={this.state.showAddTask}
          onSave={this.addTasks}
          onCancel={() => this.setState({ showAddTask: false })}
        />
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleFilter}>
              <Icon
                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                size={20}
                color={commonStyles.colors.secondary}
              />
            </TouchableOpacity>
          </View>
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
          <FlatList
            data={this.state.visibleTasks}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
        <ActionButton
          buttonColor={commonStyles.colors.today}
          onPress={() => this.setState({ showAddTask: true })}
        />
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
  iconBar: {
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})
