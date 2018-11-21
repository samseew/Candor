import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

export default class CreateAccount extends Component {
  render() {
    return (
      <View>
        <Button
          title="CreateAccount"
          onPress={() => this.props.navigation.navigate("CreateAccount")}
        />
      </View>
    );
  }
}
