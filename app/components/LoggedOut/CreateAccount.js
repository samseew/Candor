import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { RailsURL } from "../../fetch";
export default class CreateAccount extends Component {
  static navigationOptions = {
    title: "Sign Up"
  };

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  handleSignUpSubmit = info => {
    if (
      info.password === info.passwordConfirmation &&
      info.email.length > 0 &&
      info.password.length > 0 &&
      info.name.length > 0
    ) {
      // create account
      fetch(`${RailsURL}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: info.name,
          email: info.email,
          password: info.password
        })
      })
        .then(res => res.json())
        .then(data => {
          return fetch(`${RailsURL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            })
          })
            .then(res => res.json())
            .then(data => {
              AsyncStorage.setItem("token", data.token);
              this.props.navigation.navigate("Home", {
                user_info: data.user_info
              });
            })
            .catch(error => {
              console.error(error);
            });
        });
    } else if (info.password !== info.passwordConfirmation) {
      Alert.alert("The Passwords Do Not Match.");
    } else {
      Alert.alert("These Fields Can't Be Empty");
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input onChangeText={text => this.setState({ name: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => this.setState({ email: text })} />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                onChangeText={text => this.setState({ password: text })}
                onSubmitEditing={() => this.handleSignUpSubmit(this.state)}
                secureTextEntry={true}
              />
            </Item>
            <Item floatingLabel>
              <Label>Confirm Password</Label>
              <Input
                onChangeText={text =>
                  this.setState({ passwordConfirmation: text })
                }
                secureTextEntry={true}
                onSubmitEditing={() => this.handleSignUpSubmit(this.state)}
              />
            </Item>
            <Button block onPress={() => this.handleSignUpSubmit(this.state)}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
