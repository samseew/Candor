import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>Welcome, Login bitch boi</Text>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Password" />

        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
