import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import MainPage from "./components/LoggedIn/MainPage.js";
import Login from "./components/LoggedOut/Login.js";
import CreateAccount from "./components/LoggedOut/CreateAccount.js";
import ForgotPassword from "./components/LoggedOut/ForgotPassword";
import Drawer from "./components/LoggedIn/Drawer";
import Settings from "./components/LoggedIn/Settings";

const AppNavigator = createStackNavigator({
  Home: MainPage,
  Drawer: Drawer,
  Settings: Settings
});

const SignedOutNavigator = createStackNavigator({
  Login: Login,
  CreateAccount: CreateAccount,
  ForgotPassword: ForgotPassword
});

export { AppNavigator, SignedOutNavigator };
