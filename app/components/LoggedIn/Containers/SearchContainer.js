import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Search from "../Presentational/Search";
export default class SearchContainer extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Search handleSearch={this.props.handleSearch} />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
