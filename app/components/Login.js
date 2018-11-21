import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>login here</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
