import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Item from "../Presentational/Item";
import { Icon, Container, Content, Text } from "native-base";

const Key = "OvTrWbUT";

//  example Api Call - query, location (latitude, longitude), results per page and page number
// https://api.discountapi.com/v2/deals?query=adult&location=39.151958,-84.477405&per_page=30&page=1

export default class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      console.log(this.props.query);
      return (
        <Container>
          <Content>
            <Text>lmao items</Text>
            <Item />
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({});
