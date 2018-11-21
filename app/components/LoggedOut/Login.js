import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to the worst thing since this shitty framework</Text>
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
