import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { View, Text, Stylesheet, Button } from "react-native";
import { Icon, Container, Header, Content, Left } from "native-base";
class Drawer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>Drawer</Text>
          <Button
            title="settings"
            onPress={() => this.props.navigation.navigate("Settings")}
          />
        </Content>
      </Container>
    );
  }
}
export default Drawer;
