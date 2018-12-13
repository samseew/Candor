import React, { Component } from "react";
import { Image, StyleSheet, AsyncStorage } from "react-native";
import {
  Container,
  Button,
  Header,
  Content,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab
} from "native-base";
import navPic from "../../../assets/disco-75c0c1ef.png";
import FavoriteCoupons from "./FavoriteCoupons";
import {
  LoginButton,
  AccessToken,
  LoginManager,
  FacebookSdk
} from "react-native-fbsdk";

class SideDrawer extends Component {
  static navigationOptions = {
    title: "My Drawer"
  };
  constructor() {
    super();
    this.state = {
      facebook: false,
      name: null
    };
  }

  logOut = async () => {
    try {
      await AsyncStorage.removeItem("token").then(data => {
        AsyncStorage.removeItem("user_info").then(
          this.props.navigation.navigate("Login")
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  fbLogOut = async () => {
    try {
      await AsyncStorage.removeItem("fbToken").then(data => {
        AsyncStorage.removeItem("token");
        AsyncStorage.removeItem("user_info");
        LoginManager.logOut();
        this.props.navigation.navigate("Login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    try {
      AsyncStorage.getItem("fbToken").then(data => {
        if (data) {
          this.setState({
            facebook: true
          });
        } else {
          this.setState({
            facebook: false
          });
        }
      });
      AsyncStorage.getItem("user_info").then(data => {
        let userObject = JSON.parse(data);
        this.setState({
          name: userObject.name
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("side drawer render");

    return (
      <Container>
        <Header style={{ height: 150 }}>
          <Body>
            <Image source={navPic} style={styles.drawerImage} />
          </Body>
          <Right>
            <Text style={styles.welcome}>
              Welcome {"\n"} {this.state.name}
            </Text>
          </Right>
        </Header>
        <Content>
          <ListItem
            icon
            onPress={() =>
              this.props.navigation.navigate("FavoriteCoupons", {
                navigaton: this.props.navigation
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
            {this.state.facebook ? (
              <Button onPress={() => this.fbLogOut()}>
                <Text>Logout</Text>
              </Button>
            ) : (
              <Button full onPress={() => this.logOut()}>
                <Text>Logout</Text>
              </Button>
            )}
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
