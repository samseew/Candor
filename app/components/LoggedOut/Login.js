import React, { Component } from "react";
import Image from "./Image";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar
} from "react-native";
export default class Login extends Component {
  static navigationOptions = {
    title: "Log in idiot"
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <Text style={styles.text}>
          Welcome to the thing since this shitty framework
        </Text>

        <Image />

        <TextInput placeholder="Username" />
        <TextInput secureTextEntry={true} placeholder="Password" />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="CreateAccount"
          onPress={() => this.props.navigation.navigate("CreateAccount")}
        />
        <Button
          title="ForgotPasswordClickHere"
          onPress={() => this.props.navigation.navigate("ForgotPassword")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#ffffff",
    fontSize: 18
  }
});
