import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, StyleSheet } from "react-native";
import HandleBack from "../../../HandleBack";
import DrawerContainer from "./DrawerContainer";
import SearchContainer from "./SearchContainer";
import ItemContainer from "./ItemContainer";
import { Drawer, Container } from "native-base";
import SideDrawer from "../Presentational/SideDrawer";
class MainPage extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      query: null
    };
  }
  componentDidMount() {
    // this.props.fetchData();
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
  render() {
    Drawer.defaultProps.styles.mainOverlay.elevation = 0;

    closeDrawer = () => {
      this.drawer._root.close();
    };
    openDrawer = () => {
      this.drawer._root.open();
    };

    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideDrawer navigator={this.navigator} />}
        onClose={() => closeDrawer()}
      >
        <HandleBack onBack={this.onBack}>
          <View style={{ flex: 1 }}>
            <View style={styles.drawerContainer}>
              <DrawerContainer
                navigation={this.props.navigation}
                openDrawer={() => openDrawer()}
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
        </HandleBack>
      </Drawer>
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
