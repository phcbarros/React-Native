import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Icon } from 'react-native-elements'
import UserForm from '../views/UserForm'
import UserList from '../views/UserList'

const Stack = createStackNavigator()

export default (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'UserList'}
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => <AddButton {...navigation} />,
            }
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            title: 'Formulário de Usuários',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const AddButton = (props) => {
  return (
    <Button
      type="clear"
      icon={<Icon name="add" size={25} color="#fff" />}
      onPress={() => props.navigate('UserForm')}
    />
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
