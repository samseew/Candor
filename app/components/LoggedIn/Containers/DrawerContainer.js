import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button } from "react-native";
import HandleBack from "../../HandleBack";

class DrawerContainer extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    // this.props.fetchData();
  }

  render() {
    return (
      <View>
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
