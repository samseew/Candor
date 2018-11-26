import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";

class DrawerContainer extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  render() {
    return (
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <View style={styles.Icon}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Drawer")}
          >
            <Icon name="cog"> </Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawerContainer;

const styles = StyleSheet.create({
  Icon: {
    flexDirection: "row",
    flex: 1
  }
});
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
