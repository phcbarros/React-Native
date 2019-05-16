import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, DetailsScreen } from "../components/screens";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
