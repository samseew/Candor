import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import MainPage from "./components/MainPage.js";
import Login from "./components/Login.js";

const AppNavigator = createStackNavigator({
  Home: MainPage
});

const SignedOutNavigator = createStackNavigator({
  Login: Login
});

export { AppNavigator, SignedOutNavigator };
