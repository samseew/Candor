import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { View, Text, Stylesheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
class Settings extends Component {
  static navigationOptions = {
    title: "Settings"
  };
  render() {
    return (
      <Container>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}
export default Settings;
