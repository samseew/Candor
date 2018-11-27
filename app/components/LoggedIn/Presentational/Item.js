import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
import { StackActions, NavigationActions } from "react-navigation";

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Profile" })]
});
this.props.navigation.dispatch(resetAction);
export default class Item extends Component {
  // onPress={() =>
  //   this.props.navigation.navigate("ItemDetails", {
  //     id: this.props.id,
  //     item: this.props.deal
  //   })
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("ItemDetails", {
            id: this.props.id,
            item: this.props.deal
          })
        }
      >
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
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Card: {}
});
