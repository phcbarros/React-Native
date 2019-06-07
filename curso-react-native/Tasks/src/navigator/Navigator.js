import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Agenda from '../screens/agenda/Agenda'
import Auth from '../screens/auth/Auth'

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: Agenda,
  },
}

const MainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Auth',
})

export default createAppContainer(MainNavigator)
