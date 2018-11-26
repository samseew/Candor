import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View>
        <View style={styles.Search}>
          <TextInput style={styles.Input} placeholder="Search Coupons" />
          <Button
            title="Search"
            onPress={() => {
              console.log("pressed");
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Search: {
    backgroundColor: "green",
    flexDirection: "row"
  },
  Input: {
    flex: 1
  }
});
