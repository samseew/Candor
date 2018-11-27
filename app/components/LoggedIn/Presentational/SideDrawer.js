import React, { Component } from "react";
import { Text, Stylesheet, Button } from "react-native";
import { Container, Content } from "native-base";
class SideDrawer extends Component {
  static navigationOptions = {
    title: "My Drawer"
  };
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
export default SideDrawer;
