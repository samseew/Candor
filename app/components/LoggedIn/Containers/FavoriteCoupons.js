import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import Item from "../Presentational/Item";

import {
  Container,
  Content,
  Text,
  Header,
  Right,
  Button,
  Icon,
  Left,
  H1,
  H2,
  H3,
  Col,
  Row,
  Grid,
  Thumbnail,
  Footer,
  FooterTab,
  Body,
  Spinner
} from "native-base";
export default class FavoriteCoupons extends Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      coupons: [],
      isLoading: true
    };
  }
  getToken = async () => {
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
    try {
      AsyncStorage.getItem("user_info").then(data => {
        let userObject = JSON.parse(data);
        let parsedCoupons = userObject.coupons.map(el => JSON.parse(el.info));
        this.setState({
          coupons: parsedCoupons,
          isLoading: false
        });
      });
    } catch (error) {
      console.log(error);
    }

    // return this.getToken().then(token => {
    //   if (token) {
    //     return fetch("http://10.113.104.217:3000/profile", {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         parsedCoupons = data.user.coupons.map(el => JSON.parse(el.info));
    //         this.setState({
    //           coupons: parsedCoupons,
    //           isLoading: false
    //         });
    //       });
    //   }
    // });
  }

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
    debugger;
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
    userInfo = this.props.navigation.getParam("user_info");
    selectedItem = userInfo.coupons.find(
      el => JSON.parse(el.info).id === item.id
    );

    // unfavorite work around - store ids in async state for immediate deleteing,
    //otherwise - on favorites page, you have access to the rails coupon id so u
    // can delete using another fetch there
    return this.getToken().then(token => {
      if (token) {
        return fetch(`http://10.113.104.217:3000/coupons/${selectedItem.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Header style={{ backgroundColor: "#9eb0d5" }}>
            <Left>
              <Icon
                onPress={() => this.props.navigation.goBack()}
                type="FontAwesome"
                name="arrow-left"
              />
            </Left>
            <Body>
              <Text>Favorites</Text>
            </Body>
          </Header>
          <Content>
            <View>
              <Spinner />
            </View>
          </Content>
        </Container>
      );
    } else {
      return (
        <Container>
          <Header style={{ backgroundColor: "#9eb0d5" }}>
            <Left>
              <Icon
                onPress={() => this.props.navigation.goBack()}
                type="FontAwesome"
                name="arrow-left"
              />
            </Left>
            <Body>
              <Text>Favorites</Text>
            </Body>
          </Header>
          <Content>
            {this.state.coupons.map(coupon => {
              return (
                <Item
                  id={coupon.id}
                  deal={coupon}
                  navigation={this.props.navigation}
                  handleFavorite={this.handleFavorite.bind(this)}
                  handleUnFavorite={this.handleUnFavorite.bind(this)}
                />
              );
            })}
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({});
