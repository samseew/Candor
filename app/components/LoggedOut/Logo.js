import React, { Component } from "react";
import { View, Image } from "react-native";
export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 80,
            height: 110,
            marginVertical: -20
          }}
          source={require("./../../assets/tribal-alphabet-c-typography-logo-template-02-.png")}
        />
      </View>
    );
  }
}
