import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import MainPage from "./components/LoggedIn/MainPage.js";
import Login from "./components/LoggedOut/Login.js";
import CreateAccount from "./components/LoggedOut/CreateAccount.js";
import ForgotPassword from "./components/LoggedOut/ForgotPassword";
const AppNavigator = createStackNavigator({
  Home: MainPage
});

const SignedOutNavigator = createStackNavigator({
  Login: Login,
  CreateAccount: CreateAccount,
  ForgotPassword: ForgotPassword
});

export { AppNavigator, SignedOutNavigator };
