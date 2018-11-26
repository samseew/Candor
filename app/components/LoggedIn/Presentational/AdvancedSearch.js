import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Content, Text } from "native-base";

export default class AdvancedSearch extends Component {
  static navigationOptions = {
    title: "Advanced Search"
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>advanced search form </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
