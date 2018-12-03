import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchData } from "../actions/asyncAction.js";
import { View, StyleSheet, AsyncStorage } from "react-native";
import HandleBack from "../../../HandleBack";
import NavContainer from "./NavContainer";
import SearchContainer from "./SearchContainer";
import ItemContainer from "./ItemContainer";
import { Drawer } from "native-base";
import SideDrawer from "./SideDrawer";
const Key = "OvTrWbUT";
const dealsURL = "https://api.discountapi.com/v2/deals";
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
      query: null,
      items: [],
      nearMe: false
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

  componentDidMount() {
    // try {
    //   let token = AsyncStorage.getItem("user_info").then(data => {
    //     let d = JSON.parse(data);
    //     // debugger;
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    fetch(dealsURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: Key
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ items: data.deals }));
  }

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
            selectedItem = data;
            AsyncStorage.getItem("user_info").then(info => {
              let userObject = JSON.parse(info);
              userObject.coupons.push(selectedItem);
              AsyncStorage.setItem("user_info", JSON.stringify(userObject));
            });

            // this.setState({
            //   itemsFavorited: [...this.state.itemsFavorited, data]
            // });
          });
      }
    });
  };

  handleUnFavorite = item => {
    selectedItem = item;
    try {
      AsyncStorage.getItem("user_info").then(data => {
        userObject = JSON.parse(data); // gets info
        coupons = userObject.coupons.map(el => {
          //parses coupons
          let coupon = { ...el };
          coupon.info = JSON.parse(el.info);
          return coupon;
        });
        couponToUnFavorite = coupons.find(
          //coupon to unfavorite
          coupon => coupon.info.id === selectedItem.id
        );
        return this.getToken()
          .then(token => {
            if (token) {
              return fetch(
                `http://10.113.104.217:3000/coupons/${couponToUnFavorite.id}`,
                {
                  method: "DELETE",
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                }
              );
            }
          })
          .then(() => {
            let updatedCoupons = coupons.filter(
              coupon => coupon.id !== couponToUnFavorite.id
            );
            let stringifyUpdatedCouponsInfo = updatedCoupons.map(el => {
              let coupon = { ...el };
              coupon.info = JSON.stringify(el.info);
              return coupon;
            });
            userObject.coupons = stringifyUpdatedCouponsInfo;
            AsyncStorage.setItem("user_info", JSON.stringify(userObject));
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleNearMeSwitch = () => {
    console.log("clicked");

    this.setState({
      nearMe: !this.state.nearMe
    });
  };

  handleSearch = term => {
    fetch(dealsURL + `?query=${term}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: Key
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ items: data.deals, query: term });
      });
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    console.log("main container rendered");

    return (
      <HandleBack onBack={this.onBack}>
        <Drawer
          styles={{ mainOverlay: 0, zIndex: 1 }}
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
                nearMe={this.state.nearMe}
                handleNearMeSwitch={this.handleNearMeSwitch}
              />
            </View>
            <View style={styles.searchContainer}>
              <SearchContainer handleSearch={this.handleSearch} />
            </View>
            <View style={styles.itemContainer}>
              <ItemContainer
                handleFavorite={this.handleFavorite}
                handleUnFavorite={this.handleUnFavorite.bind(this)}
                items={this.state.items}
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
