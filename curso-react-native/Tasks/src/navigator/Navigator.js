import React from 'react'
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'
import AuthOrApp from '../screens/auth-or-app/AuthOrApp'
import Agenda from '../screens/agenda/Agenda'
import Auth from '../screens/auth/Auth'
import Menu from '../screens/menu/Menu'
import commonStyles from '../resources/commonStyles'

const menuRoutes = {
  Today: {
    name: 'Today',
    screen: (props) => <Agenda title="Hoje" daysAHead={0} {...props} />,
    navigationOptions: {
      title: 'Hoje',
    },
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: (props) => <Agenda title="Amanhã" daysAHead={1} {...props} />,
    navigationOptions: {
      title: 'Amanhã',
    },
  },
  Week: {
    name: 'Week',
    screen: (props) => <Agenda title="Semana" daysAHead={7} {...props} />,
    navigationOptions: {
      title: 'Semana',
    },
  },
  Month: {
    name: 'Month',
    screen: (props) => <Agenda title="Mês" daysAHead={30} {...props} />,
    navigationOptions: {
      title: 'Mês',
    },
  },
}

const menuConfig = {
  initialRouteName: 'Today',
  contentComponent: Menu,
  contentOptions: {
    labelStyle: {
      fontFamily: commonStyles.fontFamily,
      fontWeight: 'normal',
      fontSize: 20,
    },
    activeLabelStyle: {
      color: '#080',
    },
  },
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const mainRoutes = {
  Loading: {
    nam: 'Loading',
    screen: AuthOrApp,
  },
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: menuNavigator,
  },
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Loading',
})

export default createAppContainer(mainNavigator)
