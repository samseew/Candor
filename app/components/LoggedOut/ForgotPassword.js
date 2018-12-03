import React, { Component } from "react";
import { View, Text } from "react-native";

export default class ForgotPassword extends Component {
  static navigationOptions = {
    title: "Recover Password"
  };
  render() {
    console.log("render for ForgotPassword Called");

    return (
      <View>
        <Text>forgot password form </Text>
      </View>
    );
  }
}
