import React, { Component } from "react";
import { Text, Container, Content } from "native-base";
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
