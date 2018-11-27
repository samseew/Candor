import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Text } from "native-base";

export default class ItemDetails extends Component {
  render() {
    // to get item props = this.props.navigation.getParam('item')
    // id = this.props.navigation.getParam('id')

    return (
      <Container>
        <Content>
          <Text>{this.props.navigation.getParam("item").title}</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
