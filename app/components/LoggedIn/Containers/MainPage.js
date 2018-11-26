import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, StyleSheet } from "react-native";
import HandleBack from "../../../HandleBack";
import DrawerContainer from "./DrawerContainer";
import SearchContainer from "./SearchContainer";
import ItemContainer from "./ItemContainer";
class MainPage extends Component {
  static navigationOptions = {
    header: null
  };

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
        <View style={{ flex: 1 }}>
          <View style={styles.drawerContainer}>
            <DrawerContainer navigation={this.props.navigation} />
          </View>
          <View style={styles.searchContainer}>
            <SearchContainer />
          </View>
          <View style={styles.itemContainer}>
            <ItemContainer />
          </View>
        </View>
      </HandleBack>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: "row",
    flex: 1.5
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1
  },
  itemContainer: {
    flexDirection: "row",
    flex: 10
  }
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: () => {
//       dispatch(fetchData());
//     }
//   };
// };
