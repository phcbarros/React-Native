import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import {
  HomeScreen,
  DetailsScreen,
  ModalScreen,
  SettingsScreen,
  NotificationScreen,
  AuthLoadingScreen,
  SignInScreen
} from "../components/screens";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TabBarLabel } from "../components/custom";

const MainStacK = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const TabStack = createBottomTabNavigator(
  {
    TabHome: {
      screen: MainStacK,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "TabHome") {
          iconName = `home`;
        } else if (routeName === "Settings") {
          iconName = `settings`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
      // tabBarLabel: ({ focused }) => {
      //   const { routeName } = navigation.state;
      //   let name;
      //   if (routeName === "TabHome") {
      //     name = "Home";
      //   } else name = routeName;

      //   return <TabBarLabel label={name} focused={focused} />;
      // }
    }),
    initialRouteName: "TabHome",
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray"
    }
  }
);

//const RootStack = createStackNavigator(
//   {
//     Tab: TabStack,
//     MyModal: ModalScreen
//   },
//   {
//     mode: "modal",
//     headerMode: "none"
//   }
// );

const DrawerStack = createDrawerNavigator({
  Drawer: {
    screen: TabStack,
    navigationOptions: { drawerLabel: "Home" }
  },
  Nofitications: {
    screen: NotificationScreen
  },
  MyModal: {
    screen: ModalScreen,
    navigationOptions: {
      drawerLabel: "Exibir Modal"
    }
  }
});

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: DrawerStack,
  Auth: AuthStack
});

const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
