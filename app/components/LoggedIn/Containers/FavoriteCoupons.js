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
              let parsedCoupons = userObject.coupons.map(el =>
                JSON.parse(el.info)
              );
              this.setState({
                coupons: parsedCoupons
              });
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
            let stateCoupons = updatedCoupons.map(coupon => coupon.info);
            this.setState({
              coupons: stateCoupons
            });
          });
      });
    } catch (error) {
      console.log(error);
    }
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
