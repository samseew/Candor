import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { Icon } from "native-base";
import Logo from "../../LoggedOut/Logo.js";

class DrawerContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          backgroundColor: "#9eb0d5",
          flex: 1,
          flexDirection: "row"
        }}
      >
        <View style={styles.Icon}>
          <TouchableOpacity onPress={() => this.props.openDrawer()}>
            <Icon name="menu" />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleBox}>
          <View style={styles.Logo}>
            <Logo />
          </View>
        </View>
        <View />
      </View>
    );
  }
}

export default DrawerContainer;

const styles = StyleSheet.create({
  Icon: {
    flex: 2,
    marginLeft: 10,
    marginTop: 10
  },
  TitleBox: {
    flex: 9,
    alignItems: "center",
    right: "40%"
  },
  Logo: {}
});
