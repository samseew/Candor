// adb logcat *:S ReactNative:V ReactNativeJS:V -> to reach debugger
// debugger = http://localhost:8081/debugger-ui/
// pull up dev menu = adb shell input keyevent 82 or cmd + M
// run server = react-native run-android


// react-redux implementation
//react-redux
// import { Provider } from "react-redux";
// import store from "./app/store.js";
// import Test from "./app/components/MainPage.js";

import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import MainPage from "./app/components/LoggedIn/MainPage.js";
import Login from "./app/components/LoggedOut/Login.js";

// const AuthNavigator = createStackNavigator({
//   Login: Login,
//   ForgotPassword: ForgotPasswordScreen
// });

import { AppNavigator, SignedOutNavigator } from "./app/navigator.js";

class App extends Component {
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
        // </Provider>
      );
    }
  }
}

export default createAppContainer(
  createSwitchNavigator(
    {
      SignedIn: AppNavigator,
      SignedOut: SignedOutNavigator
    },
    {
      initialRouteName: "SignedOut"
    }
  )
);
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
