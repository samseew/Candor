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
    return this.getToken().then(token => {
      if (token) {
        return fetch("http://10.113.104.217:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            parsedCoupons = data.user.coupons.map(el => JSON.parse(el.info));
            this.setState({
              coupons: parsedCoupons,
              isLoading: false
            });
          });
      }
    });
  }
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
                  handleFavorite={this.props.navigation.getParam(
                    "handleFavorite"
                  )}
                  handleUnFavorite={this.props.navigation.getParam(
                    "handleUnFavorite"
                  )}
                  itemsFavorited={this.props.navigation.getParam(
                    "itemsFavorited"
                  )}
                  user_info={this.props.navigation.getParam("user_info")}
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
