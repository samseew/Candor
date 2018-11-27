import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { Container, Header, Content, Item, Input } from "native-base";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <View>
        <View style={styles.Search}>
          <TextInput
            onChangeText={text => this.setState({ searchTerm: text })}
            style={styles.Input}
            placeholder="Search Coupons"
            value={this.state.searchTerm}
            onSubmitEditing={() =>
              this.props.handleSearch(this.state.searchTerm)
            }
          />
          <Button
            title="Search"
            onPress={() => this.props.handleSearch(this.state.searchTerm)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Search: {
    flexDirection: "row"
  },
  Input: {
    flex: 1
  }
});
