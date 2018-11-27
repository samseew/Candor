import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
import Logo from "../../LoggedOut/Logo.js";

class DrawerContainer extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

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
        <Button
          transparent
          onPress={() => this.props.navigation.navigate("AdvancedSearch")}
        >
          <Icon name="search" />
        </Button>
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
    right: "20%"
  },
  Logo: {}
});
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
