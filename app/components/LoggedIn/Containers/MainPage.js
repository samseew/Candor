import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, Text, Button, StyleSheet, AsyncStorage } from "react-native";
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
      query: null,
      itemsFavorited: []
    };
  }

  onBack = () => {
    return false; // false = android button click goes back a screen,
    //set to true to disable android back button
  };
  getToken = async () => {
    // if the gettoken involves an item, it will take it as argument
    try {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        return token;
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleFavorite = item => {
    return this.getToken().then(token => {
      if (token) {
        return fetch("http://10.113.104.217:3000/coupons", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            info: item
          })
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              itemsFavorited: [...this.state.itemsFavorited, data]
            });
          });
      }
    });
  };

  handleUnFavorite = item => {
    selectedItem = this.state.itemsFavorited.find(
      viewedItem => viewedItem.info === JSON.stringify(item)
    );
    // unfavorite work around - store ids in async state for immediate deleteing,
    //otherwise - on favorites page, you have access to the rails coupon id so u
    // can delete using another fetch there
    return this.getToken().then(token => {
      if (token) {
        debugger;
        return fetch(`http://10.113.104.217:3000/coupons/${selectedItem.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    });
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
              user_info={this.state.user_info}
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
                handleFavorite={this.handleFavorite}
                handleUnFavorite={this.handleUnFavorite.bind(this)}
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
