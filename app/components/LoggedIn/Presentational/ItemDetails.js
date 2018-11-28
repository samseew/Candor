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

  postFavoriteOrUnfavorite = item => {
    this.setState({ liked: !this.state.liked });

    if (this.state.liked) {
      return this.props.navigation.getParam("handleUnFavorite")(item);

      //post to back end to add coupon info to the user
    } else {
      return this.props.navigation.getParam("handleFavorite")(item);

      //do another post to back end to remove coupon info from user
    }
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
              onPress={() =>
                this.postFavoriteOrUnfavorite(
                  this.props.navigation.getParam("item")
                )
              }
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
