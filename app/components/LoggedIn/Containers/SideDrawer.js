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
import FavoriteCoupons from "./FavoriteCoupons";
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
          <Right>
            <Text style={styles.welcome}>
              Welcome {"\n"} {this.props.user_info.name}
            </Text>
          </Right>
        </Header>
        <Content>
          <ListItem
            icon
            onPress={() =>
              this.props.navigation.navigate("FavoriteCoupons", {
                navigaton: this.props.navigation,
                itemsFavorited: this.props.itemsFavorited,
                user_info: this.props.user_info
              })
            }
          >
            <Left>
              <Button style={{ backgroundColor: "red" }}>
                <Icon type="FontAwesome" name="star" />
              </Button>
            </Left>
            <Body>
              <Text>Favorite Coupons</Text>
            </Body>
          </ListItem>

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
  },
  welcome: {
    color: "white",
    marginRight: 10,
    fontSize: 19
  }
});
