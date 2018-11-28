import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, StyleSheet } from "react-native";
import HandleBack from "../../../HandleBack";
import NavContainer from "./NavContainer";
import SearchContainer from "./SearchContainer";
import ItemContainer from "./ItemContainer";
import { Drawer, Container } from "native-base";
import SideDrawer from "./SideDrawer";
class MainPage extends Component {
  // drawer brightness bug = change elevation to 0
  //nativebase/dist/src/basic/Drawer/index.js

  //to see asnyc in dev tools call showAsyncStorageContentInDev()
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      user_info: this.props.navigation.getParam("user_info"),
      query: null
    };
  }

  onBack = () => {
    return false; // false = android button click goes back a screen,
    //set to true to disable android back button
  };

  handleSearch = term => {
    this.setState({
      query: term
    });
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <HandleBack onBack={this.onBack}>
        <Drawer
          ref={ref => {
            this.drawer = ref;
          }}
          content={
            <SideDrawer
              navigator={this.navigator}
              navigation={this.props.navigation}
            />
          }
          onClose={() => this.closeDrawer()}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.drawerContainer}>
              <NavContainer
                navigation={this.props.navigation}
                openDrawer={() => this.openDrawer()}
              />
            </View>
            <View style={styles.searchContainer}>
              <SearchContainer handleSearch={this.handleSearch} />
            </View>
            <View style={styles.itemContainer}>
              <ItemContainer
                query={this.state.query}
                navigation={this.props.navigation}
              />
            </View>
          </View>
        </Drawer>
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
