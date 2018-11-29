import React, { Component } from "react";
import { StyleSheet, View, Image, Linking } from "react-native";
import {
  Container,
  Content,
  Text,
  Header,
  Right,
  Button,
  Icon,
  Left,
  H1,
  H2,
  H3,
  Col,
  Row,
  Grid,
  Thumbnail,
  Footer,
  FooterTab
} from "native-base";

export default class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }
  static navigationOptions = {
    header: null
  };
  // to get item props = this.props.navigation.getParam('item')
  // id = this.props.navigation.getParam('id')
  postFavoriteOrUnfavorite = item => {
    this.setState({ liked: !this.state.liked });

    if (this.state.liked) {
      return this.props.navigation.getParam("handleUnFavorite")(item);

      //post to back end to add coupon info to the user
    } else {
      return this.props.navigation.getParam("handleFavorite")(item);

      //do another post to back end to remove coupon info from user
    }
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#9eb0d5" }}>
          <Left>
            <Icon
              onPress={() => this.props.navigation.goBack()}
              type="FontAwesome"
              name="arrow-left"
            />
          </Left>
          <Right>
            <Icon
              style={{ marginRight: 10 }}
              type="FontAwesome"
              name={this.state.liked ? "heart" : "heart-o"}
              onPress={() =>
                this.postFavoriteOrUnfavorite(
                  this.props.navigation.getParam("item")
                )
              }
            />
          </Right>
        </Header>
        <View style={{ flex: 1 }}>
          <Content style={{ flex: 1 }}>
            <Grid style={{ flex: 1 }}>
              <Row style={styles.titleContainer}>
                <Text style={styles.title}>
                  {this.props.navigation.getParam("item").title}
                </Text>
              </Row>
              <Row
                style={{ justifyContent: "center", backgroundColor: "black" }}
              >
                <Thumbnail
                  style={styles.Thumbnail}
                  square
                  source={{
                    uri: this.props.navigation.getParam("item").image_url
                  }}
                />
              </Row>
              <Row>
                <Text>
                  Price: ${this.props.navigation.getParam("item").price}
                </Text>
              </Row>
              <Row style={styles.description}>
                <Text>
                  {this.props.navigation.getParam("item").description}
                </Text>
              </Row>
              <Row style={styles.finePrint}>
                <Text>{this.props.navigation.getParam("item").fine_print}</Text>
              </Row>
              <Row />
              <Row>
                <Text>
                  {this.props.navigation.getParam("item").merchant.address
                    ? `                  ${
                        this.props.navigation.getParam("item").merchant.name
                      }
                    Address: ${
                      this.props.navigation.getParam("item").merchant.address
                    },
                      ${this.props.navigation.getParam("item").merchant.region},
                      ${
                        this.props.navigation.getParam("item").merchant.country
                      },
                      ${
                        this.props.navigation.getParam("item").merchant
                          .postal_code
                      }`
                    : null}
                </Text>
              </Row>
            </Grid>
          </Content>
        </View>
        <Footer>
          <FooterTab>
            <Button
              full
              onPress={() =>
                Linking.openURL(
                  this.props.navigation.getParam("item").url
                ).catch(err => console.error("an error occurred", err))
              }
            >
              <Text>Order!</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Thumbnail: {
    width: 250,
    height: 250
  },
  titleContainer: {
    marginTop: 10
  },
  finePrint: {
    marginTop: 10
  },
  description: {
    marginTop: 10
  },
  title: {
    fontSize: 20
  }
});
