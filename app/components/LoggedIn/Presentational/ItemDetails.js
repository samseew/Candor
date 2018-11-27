import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Text } from "native-base";

export default class ItemDetails extends Component {
  render() {
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

    return (
      <Container>
        <Content>
          <Text>lol</Text>
          {/* <Text>{this.props.navigation.getParam("item").title}</Text> */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
