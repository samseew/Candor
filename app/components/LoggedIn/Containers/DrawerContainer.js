import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";
import Logo from "../../../components/LoggedOut/Logo.js";

class DrawerContainer extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  render() {
    return (
      <View
        style={{ backgroundColor: "yellow", flex: 1, flexDirection: "row" }}
      >
        <View style={styles.Icon}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Drawer")}
          >
            <Icon name="settings" />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleBox}>
          <View style={styles.Logo}>
            <Logo />
          </View>
        </View>
      </View>
    );
  }
}

export default DrawerContainer;

const styles = StyleSheet.create({
  Icon: {
    flex: 2
  },
  TitleBox: {
    backgroundColor: "white",
    flex: 9,
    alignItems: "center",
    right: "30%"
  },
  Logo: {
    backgroundColor: "green"
  }
});
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
