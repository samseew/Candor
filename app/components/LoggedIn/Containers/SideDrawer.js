import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import {
  Container,
  Button,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch
} from "native-base";
import navPic from "../../../assets/disco-75c0c1ef.png";
class SideDrawer extends Component {
  static navigationOptions = {
    title: "My Drawer"
  };
  render() {
    return (
      <Container>
        <Header style={{ height: 150 }}>
          <Body>
            <Image source={navPic} style={styles.drawerImage} />
          </Body>
        </Header>
        <Content>
          <ListItem
            icon
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="cog" />
              </Button>
            </Left>
            <Body>
              <Text>Settings</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
export default SideDrawer;

const styles = StyleSheet.create({
  container: {},
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75
  }
});
