// adb logcat *:S ReactNative:V ReactNativeJS:V -> to reach debugger
// debugger = http://localhost:8081/debugger-ui/
// pull up dev menu = adb shell input keyevent 82 or cmd + M
// run server = react-native run-android
import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
//react-redux
// import { Provider } from "react-redux";
// import store from "./app/store.js";
// import Test from "./app/components/MainPage.js";

import { createStackNavigator, createAppContainer } from "react-navigation";
import MainPage from "./app/components/MainPage.js";
import Login from "./app/components/Login.js";
// type Props = {};<Props>

// nav routes for the app

// const AuthNavigator = createStackNavigator({
//   Login: Login,
//   ForgotPassword: ForgotPasswordScreen
// });

const AppNavigator = createStackNavigator(
  {
    Home: MainPage,
    Login: Login
  },

  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        // <Provider store={store}>
        <AppContainer />
        // </Provider>
      );
    }
  }
}

// export default createAppContainer(AppNavigator);

////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
//////////////
