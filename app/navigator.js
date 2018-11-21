import { createStackNavigator, createAppContainer } from "react-navigation";
import MainPage from "./components/MainPage.js";
import Login from "./components/Login.js";

const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    Login: Login
  },

  {
    initialRouteName: "Login"
  }
);

export { AppNavigator };
