import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button } from "react-native";
import HandleBack from "../../HandleBack";

class MainPage extends Component {
  static navigationOptions = {};

  componentDidMount() {
    // this.props.fetchData();
  }

  onBack = () => {
    return false; // false = android button click goes back a screen,
    //set to true to disable android back button
  };

  render() {
    return (
      <HandleBack onBack={this.onBack}>
        <View>
          <Button
            title="click"
            onPress={() => this.props.navigation.navigate("Drawer")}
          />
          <Text>fuck y</Text>
        </View>
      </HandleBack>
    );
  }
}

export default MainPage;

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
