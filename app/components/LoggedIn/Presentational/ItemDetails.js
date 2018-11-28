import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Text,
  Header,
  Right,
  Button,
  Icon,
  Left
} from "native-base";

export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }
  static navigationOptions = {
    header: null
  };
  // to get item props = this.props.navigation.getParam('item')
  // id = this.props.navigation.getParam('id')

  // .title
  //.description
  //.image_url
  //.fine_print
  //.merchant.name
  //.merchant.address
  //.merchant.postal_code
  //.merchant.region (state)
  //.merchant.country
  //.url

  postFavoriteorUnfavorite = () => {
    this.setState({ liked: !this.state.liked });
    console.log();
  };
  render() {
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
          <Right>
            <Icon
              style={{ marginRight: 10 }}
              type="FontAwesome"
              name={this.state.liked ? "heart" : "heart-o"}
              onPress={() => this.postFavoriteorUnfavorite()}
            />
          </Right>
        </Header>
        <Content>
          <Text>lol</Text>
          {/* <Text>{this.props.navigation.getParam("item").title}</Text> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
