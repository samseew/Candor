import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button } from "react-native";
class MainPage extends Component {
  static navigationOptions = {
    headerLeft: <Button title="..." onPress={() => alert("lel")} />
  };

  componentDidMount() {
    // this.props.fetchData();
  }
  render() {
    return (
      <View>
        <Text>fuck yoou for workng</Text>
      </View>
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
