import React, { Component } from "react";
import { View, Text, Stylesheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
class Settings extends Component {
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
export default createAppContainer(Settings);
