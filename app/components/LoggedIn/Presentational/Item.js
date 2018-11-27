import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class Item extends Component {
  render() {
    return (
      <Card style={styles.Card}>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: this.props.deal.image_url }} />
            <Body>
              <Text>{this.props.deal.title}</Text>
              <Text note numberOfLines={5} ellipsizeMode="tail">
                {this.props.deal.description}
              </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  Card: {}
});
