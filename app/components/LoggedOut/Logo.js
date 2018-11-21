import React, { Component } from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 40, height: 70 }}
          source={require("./../../assets/tribal-alphabet-c-typography-logo-template-02-.jpeg")}
        />
      </View>
    );
  }
}
