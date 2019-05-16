import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import {
  HomeScreen,
  DetailsScreen,
  ModalScreen,
  SettingsScreen
} from "../components/screens";
import { TabBarLabel } from "../components/custom";

const MainStacK = createStackNavigator(
  {
    Home1: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home1",
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

const TabStack = createBottomTabNavigator(
  {
    Home: { screen: MainStacK },
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      showIcon: false
    },
    // defaultNavigationOptions: ({ focused, navigation }) => ({
    //   tabBarLabel: () => {
    //     const { routeName } = navigation.state;
    //     let name;
    //     if (routeName === "Home") {
    //       name = "Home";
    //     } else name = routeName;

    //     return <TabBarLabel label={name} focused={focused} />;
    //   }
    // }),
    initialRouteName: "Home"
  }
);

const RootStack = createStackNavigator(
  {
    Tab: TabStack,
    MyModal: ModalScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
