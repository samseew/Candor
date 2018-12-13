import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Item from "../Presentational/Item";
import { Container, Content } from "native-base";

const Key = "OvTrWbUT"; // discount api
const dealsURL = "https://api.discountapi.com/v2/deals";

//  example Api Call - query, location (latitude, longitude), results per page and page number
// https://api.discountapi.com/v2/deals?query=adult&location=39.151958,-84.477405&per_page=30&page=1

export default class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: this.props.items
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    console.log("container render");

    if (this.state.isLoading) {
      return (
        <View style={styles.Activity}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <Container>
          <Content>
            {this.props.items.map(deal => {
              return (
                <Item
                  handleFavorite={this.props.handleFavorite}
                  handleUnFavorite={this.props.handleUnFavorite}
                  key={deal.deal.id}
                  id={deal.deal.id}
                  deal={deal.deal}
                  navigation={this.props.navigation}
                />
              );
            })}
          </Content>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  Activity: {
    flex: 1,
    justifyContent: "center"
  }
});
