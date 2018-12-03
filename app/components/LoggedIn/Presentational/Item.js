import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

export default class Item extends Component {
  render() {
    console.log("item render for", this.props.id);

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("ItemDetails", {
            id: this.props.id,
            item: this.props.deal,
            handleFavorite: this.props.handleFavorite,
            handleUnFavorite: this.props.handleUnFavorite
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
