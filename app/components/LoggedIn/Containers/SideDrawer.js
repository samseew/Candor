import React, { Component } from "react";
import { Image, StyleSheet, AsyncStorage } from "react-native";
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
  Switch,
  Footer,
  FooterTab
} from "native-base";
import navPic from "../../../assets/disco-75c0c1ef.png";
class SideDrawer extends Component {
  static navigationOptions = {
    title: "My Drawer"
  };

  logOut = async () => {
    try {
      await AsyncStorage.removeItem("token").then(data => {
        this.props.navigation.navigate("Login");
      });
    } catch (error) {
      console.log(error);
    }
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

        <Footer>
          <FooterTab>
            <Button full onPress={() => this.logOut()}>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
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
