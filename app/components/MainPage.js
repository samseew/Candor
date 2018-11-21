import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/asyncAction.js";
import { View, Text } from "react-native";
class MainPage extends Component {
  componentDidMount() {
    // this.props.fetchData();
  }
  render() {
    return (
      <View>
        <Text>fuck yu for working</Text>
      </View>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };

export default MainPage;
