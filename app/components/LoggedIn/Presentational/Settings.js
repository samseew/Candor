import React, { Component } from "react";
import { Stylesheet } from "react-native";
import {
  Icon,
  Button,
  Text,
  Container,
  Header,
  Content,
  Left
} from "native-base";
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
