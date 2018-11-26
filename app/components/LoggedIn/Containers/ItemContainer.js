import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Item from "../Presentational/Item";
import { Icon } from "native-base";
export default class ItemContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Item />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
