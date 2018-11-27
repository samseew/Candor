import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import MainPage from "./components/LoggedIn/Containers/MainPage.js";
import Login from "./components/LoggedOut/Login.js";
import CreateAccount from "./components/LoggedOut/CreateAccount.js";
import ForgotPassword from "./components/LoggedOut/ForgotPassword";
import Drawer from "./components/LoggedIn/Presentational/Drawer";
import Settings from "./components/LoggedIn/Presentational/Settings";
import AdvancedSearch from "./components/LoggedIn/Presentational/AdvancedSearch";
import ItemDetails from "./components/LoggedIn/Presentational/ItemDetails";
const AppNavigator = createStackNavigator({
  Home: MainPage,
  Drawer: Drawer,
  Settings: Settings,
  AdvancedSearch: AdvancedSearch,
  ItemDetails: ItemDetails
});

const SignedOutNavigator = createStackNavigator({
  Login: Login,
  CreateAccount: CreateAccount,
  ForgotPassword: ForgotPassword
});

export { AppNavigator, SignedOutNavigator };
