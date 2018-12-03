import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.Search}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={text => this.setState({ searchTerm: text })}
              style={styles.Input}
              placeholder="Search Coupons"
              placeholderTextColor="black"
              value={this.state.searchTerm}
              onSubmitEditing={() =>
                this.props.handleSearch(this.state.searchTerm)
              }
            />
          </View>
          <View style={styles.searchButtonContainer}>
            <Button
              color="#841584"
              title="Search"
              style={styles.button}
              onPress={() => this.props.handleSearch(this.state.searchTerm)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Search: {
    flexDirection: "row",
    flex: 1
  },
  Input: {
    backgroundColor: "rgba(255,255,255, .8)",
    color: "black",
    flex: 1
  },
  button: {
    backgroundColor: "#1c313a",
    borderRadius: 150,
    justifyContent: "center",
    flex: 1
  },
  inputContainer: {
    flex: 2
  },
  searchButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    justifyContent: "center"
  }
});
