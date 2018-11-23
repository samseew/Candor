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
import Settings from "./components/LoggedIn/Settings";

const AppNavigator = createStackNavigator({
  Home: MainPage,
  Drawer: Settings
});

const SignedOutNavigator = createStackNavigator({
  Login: Login,
  CreateAccount: CreateAccount,
  ForgotPassword: ForgotPassword
});

const DrawerNavigator = createStackNavigator({
  Settings: {
    screen: Settings
  }
});

export { AppNavigator, SignedOutNavigator, DrawerNavigator };
