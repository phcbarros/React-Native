import React, {FC} from 'react'
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import {ParamListBase} from '@react-navigation/native'
import {StackNavigationProp} from '@react-navigation/stack'

import {AuthContext} from '../context/AuthContext'
import {UserContext} from '../context/UserContext'
import HomeScreen from '../screens/home/HomeScreen'
import CalendarScreen from '../screens/calendar/CalendarScreen'

const Drawer = createDrawerNavigator()

type CustomDrawerContentProps = DrawerContentComponentProps & {
  userName: string
  userEmail: string
  userPhoto: ImageSourcePropType
  signOut: () => void
}

type DrawerMenuProps = {
  navigation: StackNavigationProp<ParamListBase>
}

const CustomDrawerContent: FC<CustomDrawerContentProps> = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={styles.profileView}>
      <Image
        source={props.userPhoto}
        resizeMode="contain"
        style={styles.profilePhoto}
      />
      <Text style={styles.profileUserName}>{props.userName}</Text>
      <Text style={styles.profileEmail}>{props.userEmail}</Text>
    </View>
    <DrawerItemList {...props} />
    <DrawerItem label="Sign Out" onPress={props.signOut} />
  </DrawerContentScrollView>
)

export default class DrawerMenuContent extends React.Component<DrawerMenuProps> {
  static contextType = AuthContext

  state = {
    // TEMPORARY
    userLoading: true,
    userFirstName: 'Adele',
    userFullName: 'Adele Vance',
    userEmail: 'adelev@contoso.com',
    userTimeZone: 'UTC',
    userPhoto: require('../images/no-profile-pic.png'),
  }

  _signOut = async () => {
    this.context.signOut()
  }

  async componentDidMount() {
    this.props.navigation.setOptions({
      headerShown: false,
    })
  }

  render() {
    const userLoaded = !this.state.userLoading

    return (
      <UserContext.Provider value={this.state}>
        <Drawer.Navigator
          drawerType="front"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#276b80',
            },
            headerTintColor: 'white',
          }}
          drawerContent={(props) => (
            <CustomDrawerContent
              {...props}
              userName={this.state.userFullName}
              userEmail={this.state.userEmail}
              userPhoto={this.state.userPhoto}
              signOut={this._signOut}
            />
          )}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{drawerLabel: 'Home', headerTitle: 'Welcome'}}
          />
          {userLoaded && (
            <Drawer.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{drawerLabel: 'Calendar'}}
            />
          )}
        </Drawer.Navigator>
      </UserContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileView: {
    alignItems: 'center',
    padding: 10,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileUserName: {
    fontWeight: '700',
  },
  profileEmail: {
    fontWeight: '200',
    fontSize: 10,
  },
})
