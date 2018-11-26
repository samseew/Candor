import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button } from "react-native";

class DrawerContainer extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }

  render() {
    return (
      <View style={{ backgroundColor: "yellow", flex: 1 }}>
        <Text>im the drawer</Text>
        <Button
          title="My Drawer"
          onPress={() => this.props.navigation.navigate("Drawer")}
        />
      </View>
    );
  }
}

export default DrawerContainer;

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
